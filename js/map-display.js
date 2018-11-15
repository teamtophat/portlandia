var mymap = L.map('mapid').setView([45.5122, -122.6587], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyY3lzaWx2ZTIyNSIsImEiOiJjam9nZnVtZGowZXFuM3FscGFoNG40MXY4In0.44qNk8FQMrSxG6kXmjhYMA'
}).addTo(mymap);

var Icon = L.icon({
    iconUrl: '../assets/mayor01cut.jpg',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
});

var coffeeMarker = L.marker([45.5191171, -122.655], { icon: Icon }).addTo(mymap);
coffeeMarker.bindPopup('<b>Stumptown Coffee!</b><br><a onclick="coffee-link" href="coffee-question.html"><img id="coffee-pic" disabled="disabled" src="../assets/coffee.jpg"></a>');

var bookMarker = L.marker([45.541, -122.666], { icon: Icon }).addTo(mymap);
bookMarker.bindPopup('<b>Women and Women First</b><br><a onclick="bookstore-link" href="bookstore-question.html"><img id="bookstore-pic" src="../assets/bookstore-pic.jpg"></a>'); 

var recordMarker = L.marker([45.523, -122.684], { icon: Icon }).addTo(mymap);
recordMarker.bindPopup('<b> Everyday Music</b><br><a onclick="record-link" href="records-question.html"><img id="record-pic" src="../assets/record-pic.jpg"></a>'); 

var brunchMarker = L.marker([45.522, -122.6416], { icon: Icon }).addTo(mymap);
brunchMarker.bindPopup('<b> Screen Door</b><br><a onclick="brunch-link" href="brunch-question.html"><img id="brunch-pic" src="../assets/brunch.jpg"></a>'); 

var storeMarker = L.marker([45.517, -122.680], { icon: Icon }).addTo(mymap);
storeMarker.bindPopup('<b> Columbia Store</b><br><a onclick="store-link" href="store-question.html"><img id="store-pic" src="../assets/store.jpg"></a>'); 

var hikingMarker = L.marker([45.517, -122.594], { icon: Icon }).addTo(mymap);
hikingMarker.bindPopup('<b> Mount Tabor </b><br><a onclick="hiking-link" href="hiking-question.html"><img id="hiking-pic" src="../assets/hiking.jpg"></a>'); 