# Leaflet/Mapbox Challenge - Layered Earthquake Map

## Summary

In this project, I built a layered world map that displays all earthquakes from the last 7 days by magnitude and depth as well as the borders of the Earth's tectonic plates.

### Using the Final Application
Since the API is not free to use, the final application is not publicly available. The page opens in dark mode with both earthquakes and tectonic plate borders visible:

  ![Opening Website](FinalImages/SiteLoad.PNG)

Clicking on any of the earthquakes will show the name of the earthquake which is uaully just a description of the location and the time that it happened. In the bottom right corner of the screen is a legend to help the user understand the depth of the earthquake. In the upper right corner of the screen is a control for the user to choose which map layer is visible and whether or not the earthquakes or tectonic plates are visible. 

## Tools
These are the tools, techniques, and resources used in this project.

* Javascript, leaflet, and Mapbox are used to generate the map

* HTML is used for the framework of the page and CSS for styling

### About the Data

The earthquake data comes from the 'All Earthquakes from the Past 7 Days' data set on the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page. The tectonic plate borders geoJSON comes from <https://github.com/fraxen/tectonicplates>.

## Project Steps

### Step 1: Static Page Elements
The page is quite simple, 1 div with the map in it. Everything else is javascript.

### Step 2: Map Code

  ![Map Code](FinalImages/MapCode.PNG)

  This is the code at the root of the map, passing in the center coordinates and initial zoom value as well as setting which layers show up on page load.

  ![Zoomed View](FinalImages/PlatesAndQuakes.PNG)

  When zooming out further, it is possible to fully appreciate the vastness of the tectonic plates and how many earthquakes happen in 1 week.