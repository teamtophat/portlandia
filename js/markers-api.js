
const markers = [{
    type: ' coffee-marker',
    // you only have one, don't use an array
    geometry: {
        type: 'Point',
        coordinates: [-122.663, 45.512]
    },
    properties: {
        title: 'Stumptown Coffee',
        description: '<a href="coffee-question.html"><img id="coffee-pic" disabled="disabled" src="assets/coffee.jpg"></a>'
    }
}, {
    type: 'brunch-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.6416, 45.522]
    },
    properties: {
        title: 'Screen Door',
        description: '<a href="brunch-question.html"><img id="brunch-pic" src="assets/brunch.jpg"></a>'
    }
}, {
    type: ' record-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.622, 45.526]
    },
    properties: {
        title: 'Everyday Music',
        description: '<a href="records-question.html"><img id="record-pic" src="assets/record-pic.jpg"></a>'
    }
}, {
    type: ' book-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.666, 45.541]
    },
    properties: {
        title: 'Women and Women First',
        description:'<a href="bookstore-question.html"><img id="bookstore-pic" src="assets/bookstore-pic.jpg"></a>'
    }
}, {
    type: ' store-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.680, 45.512]
    },
    properties: {
        title: 'Columbia Store',
        description:'<a href="store-question.html"><img id="store-pic" src="assets/store.jpg"></a>'
    }
}, {
    type: ' hiking-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.594, 45.517]
    },
    properties: {
        title:'Mount Tabor',
        description:'<a href="hiking-question.html"><img id="hiking-pic" src="assets/hiking.jpg"></a>'
    }
}, {
    type: ' chicken-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.641, 45.512]
    },
    properties: {
        title:'Is it Local?',
        description:'<a href="chicken-scene.html"><img id="chicken-pic" src="assets/chicken-scene.jpg"></a>'
    }
}, {
    type: ' art-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.698, 45.533]
    },
    properties: {
        title:'Good Walls, Bad Art!',
        description:'<a href="art.html"><img id="art-pic" src="assets/art-scene.jpg"></a>'
    }
}, {
    type: 'bird-marker',
    geometry: {
        type: 'Point',
        coordinates: [-122.650, 45.541]
    },
    properties: {
        title:'Put a bird on it',
        description:'<a href="bird.html"><img id="bird-pic" src="assets/bird-scene.jpg"></a>'
    }
}];

export default {
    getAll() {
        return markers;
    }
};