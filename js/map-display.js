
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY3lzaWx2ZTIyNSIsImEiOiJjam9nZnVtZGowZXFuM3FscGFoNG40MXY4In0.44qNk8FQMrSxG6kXmjhYMA';
const mymap = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/marcysilve225/cjoggove76wsu2rpcaf2eyqcn',
    center: [-122.6587, 45.5122],
    zoom: 10
});      


var Icon = L.icon({
    iconUrl: 'mayor01cut.jpg',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var coffeeMarker = {
    type: ' markers',
    features: [{
        type: 'marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.655, 45.5191171]
        },
        properties: {
            description: '<b>Stumptown Coffee!</b><br><a onclick="coffee-link" href="coffee-question.html"><img id="coffee-pic" disabled="disabled" src="coffee.jpg"></a>'
        }
    }],
};
coffeeMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});

var brunchMarker = {
    type: ' markers',
    features: [{
        type: 'marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.6416, 45.522]
        },
        properties: {
            description: '<b> Screen Door</b><br><a onclick="brunch-link" href="brunch-question.html"><img id="brunch-pic" src="brunch.jpg"></a>'
        }
    }],
};
brunchMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
var recordMarker = {
    type: ' markers',
    features: [{
        type: 'marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.684, 45.523]
        },
        properties: {
            description: '<b> Everyday Music</b><br><a onclick="record-link" href="records-question.html"><img id="record-pic" src="record-pic.jpg"></a>'
        }
    }],
};
recordMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
var bookstoreMarker = {
    type: ' markers',
    features: [{
        type: 'marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.666, 45.541]
        },
        properties: {
            description:'<b>Women and Women First</b><br><a onclick="bookstore-link" href="bookstore-question.html"><img id="bookstore-pic" src="bookstore-pic.jpg"></a>'
        }
    }],
};
bookstoreMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
var storeMarker = {
    type: ' markers',
    features: [{
        type: 'marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.680, 45.517]
        },
        properties: {
            description:'<b> Columbia Store</b><br><a onclick="store-link" href="store-question.html"><img id="store-pic" src="store.jpg"></a>'
        }
    }],
};
storeMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
bookstoreMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
var hikingMarker = {
    type: ' markers',
    features: [{
        type: 'marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.594, 45.517]
        },
        properties: {
            description:'<b> Mount Tabor </b><br><a onclick="hiking-link" href="hiking-question.html"><img id="hiking-pic" src="hiking.jpg"></a>'
        }
    }],
};
hikingMarker.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
