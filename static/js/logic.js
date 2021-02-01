//Function to determine circle size
function circleSize(mag) {
    return mag * 30000;
}

//Function to determine circle size
function circleColor(depth) {
    return "red";
}

// Perform a GET request to the query URL
d3.json(url, function(data) {

    // Create a circle for each earthquake in the dataset
    var earthquakes = []
    data.features.forEach(x => {
        var lat=x.geometry.coordinates[1]
        var lng=x.geometry.coordinates[0]

        earthquakes.push(
            L.circle([lat,lng], {
                stroke: false,
                fillOpacity: 0.8,
                fillColor: circleColor(x.geometry.coordinates[2]),
                radius: circleSize(x.properties.mag)
            }).bindPopup(
                "<h3>" + x.properties.place +
      "</h3><hr><p>" + new Date(x.properties.time) + "</p>"
            )
        )
    });

    // Create a layer out of the circles
    var earthquakeLayer = L.layerGroup(earthquakes);

    // Define layers
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/dark-v10",
        accessToken: API_KEY
    });

    var outmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/outdoors-v10",
        accessToken: API_KEY
    });

    var satmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/satellite-v8",
        accessToken: API_KEY
    });

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
        "Street Map": streetmap,
        "Dark Map": darkmap,
        "Outdoors Map": outmap,
        "Satellite Map": satmap
    };

    // Create overlay object to hold our overlay layer
    var overlayMaps = {
        Earthquakes: earthquakeLayer
    };

    // Creating map object
    var myMap = L.map("map", {
        center: [39.0522, -110.2437],
        zoom: 6,
        layers: [darkmap, earthquakeLayer]
    });

    // Create a layer control
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

  });