
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY3lzaWx2ZTIyNSIsImEiOiJjam9nZnVtZGowZXFuM3FscGFoNG40MXY4In0.44qNk8FQMrSxG6kXmjhYMA';
const mymap = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/marcysilve225/cjoggove76wsu2rpcaf2eyqcn',
    center: [-122.6587, 45.5122],
    zoom: 10
});      

const coffeeMarker = {
    type: ' coffee-marker',
    features: [{
        type: 'coffee-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.655, 45.5191171]
        },
        properties: {
            title: 'Stumptown Coffee',
            description: '<a onclick="coffee-link" href="coffee-question.html"><img id="coffee-pic" disabled="disabled" src="assets/coffee.jpg"></a>'
        }
    }],
};
coffeeMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'coffee-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});

const brunchMarker = {
    type: 'brunch-marker',
    features: [{
        type: 'brunch-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.6416, 45.522]
        },
        properties: {
            title: 'Screen Door',
            description: '<a onclick="brunch-link" href="brunch-question.html"><img id="brunch-pic" src="assets/brunch.jpg"></a>'
        }
    }],
};
brunchMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'brunch-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const recordMarker = {
    type: ' record-marker',
    features: [{
        type: 'record-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.622, 45.526]
        },
        properties: {
            title: 'Everyday Music',
            description: '<a onclick="record-link" href="records-question.html"><img id="record-pic" src="assets/record-pic.jpg"></a>'
        }
    }],
};
recordMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'record-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const bookstoreMarker = {
    type: ' book-marker',
    features: [{
        type: 'bookstore-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.666, 45.541]
        },
        properties: {
            title: 'Women and Women First',
            description:'<a onclick="bookstore-link" href="bookstore-question.html"><img id="bookstore-pic" src="assets/bookstore-pic.jpg"></a>'
        }
    }],
};
bookstoreMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'bookstore-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const storeMarker = {
    type: ' store-marker',
    features: [{
        type: 'store-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.680, 45.512]
        },
        properties: {
            title: 'Columbia Store',
            description:'<a onclick="store-link" href="store-question.html"><img id="store-pic" src="assets/store.jpg"></a>'
        }
    }],
};
storeMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'store-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
bookstoreMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const hikingMarker = {
    type: ' hiking-marker',
    features: [{
        type: 'hiking-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.594, 45.517]
        },
        properties: {
            title:'Mount Tabor',
            description:'<a onclick="hiking-link" href="hiking-question.html"><img id="hiking-pic" src="assets/hiking.jpg"></a>'
        }
    }],
};
hikingMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'hiking-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const chickenMarker = {
    type: ' chicken-marker',
    features: [{
        type: 'chicken-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.641, 45.512]
        },
        properties: {
            title:'Is it Local?',
            description:'<a onclick="chicken-link" href="chicken-scene.html"><img id="chicken-pic" src="assets/chicken-scene.jpg"></a>'
        }
    }],
};
chickenMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'chicken-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const artMarker = {
    type: ' art-marker',
    features: [{
        type: 'art-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.698, 45.533]
        },
        properties: {
            title:'Good Walls, Bad Art!',
            description:'<a onclick="art-link" href="art.html"><img id="art-pic" src="assets/art-scene.jpg"></a>'
        }
    }],
};
artMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'art-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});
const birdMarker = {
    type: 'bird-marker',
    features: [{
        type: 'bird-marker',
        geometry: {
            type: 'Point',
            coordinates: [-122.650, 45.541]
        },
        properties: {
            title:'Put a bird on it',
            description:'<a onclick="bird-link" href="bird.html"><img id="bird-pic" src="assets/bird-scene.jpg"></a>'
        }
    }],
};
birdMarker.features.forEach(function(marker) {

    const el = document.createElement('div');
    el.className = 'bird-marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mymap)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
});



