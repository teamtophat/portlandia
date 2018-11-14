var mymap = L.map('mapid').setView([45.5122, -122.6587], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyY3lzaWx2ZTIyNSIsImEiOiJjam9nZnVtZGowZXFuM3FscGFoNG40MXY4In0.44qNk8FQMrSxG6kXmjhYMA'
}).addTo(mymap);

// mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY3lzaWx2ZTIyNSIsImEiOiJjam9nZnVtZGowZXFuM3FscGFoNG40MXY4In0.44qNk8FQMrSxG6kXmjhYMA';
// const map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/marcysilve225/cjoggove76wsu2rpcaf2eyqcn',
// center: [-76.500000, 39.290000],
// zoom: 11.0
// }).addTo(mymap); 

var coffeeMarker = L.marker([45.5191171, -122.655]).addTo(mymap);
coffeeMarker.bindPopup('<b>Stumptown Coffee!</b><br><a onclick="coffee-link" href="coffee-question.html"><img id="coffee-pic" src="coffee.jpg"></a>'); 

var bookMarker = L.marker([45.5625569, -122.666]).addTo(mymap);
bookMarker.bindPopup('<b>Women and Women First!</b><br><a onclick="bookstore-link" href="bookstore-question.html"><img id="bookstore-pic" src="bookstore-pic.jpg"></a>'); 

var recordMarker = L.marker([45.523, -122.684]).addTo(mymap);
recordMarker.bindPopup('<b> Everyday Music!</b><br><a onclick="record-link" href="records-question.html"><img id="record-pic" src="record-pic.jpg"></a>'); 

var brunchMarker = L.marker([45.522, -122.6416]).addTo(mymap);
brunchMarker.bindPopup('<b> Screen Door!</b><br><a onclick="brunch-link" href="brunch-question.html"><img id="brunch-pic" src="brunch.jpg"></a>'); 

