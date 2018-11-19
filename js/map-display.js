import markersApi from './markers-api.js';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY3lzaWx2ZTIyNSIsImEiOiJjam9nZnVtZGowZXFuM3FscGFoNG40MXY4In0.44qNk8FQMrSxG6kXmjhYMA';
const Map = mapboxgl.Map;
const Popup = mapboxgl.Popup;
const Marker = mapboxgl.Marker;

const map = new Map({
    container: 'mapid',
    style: 'mapbox://styles/marcysilve225/cjoggove76wsu2rpcaf2eyqcn',
    center: [-122.6587, 45.5122],
    zoom: 11.5
});      

// These should all be an array of "data"
const markers = markersApi.getAll();

// Now we can loop the markers and add them through
// one common code block. (even without the array, you
// should create a function)

markers.forEach(marker => {
    const el = document.createElement('div');
    el.className = marker.type;

    // use template literals
    const popup = new Popup({ offset: 25 }).setHTML(`
        <h3>${marker.properties.title}</h3>
        <p>${marker.properties.description}</p>
    `);
    
    new Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map)
        .setPopup(popup);
});


