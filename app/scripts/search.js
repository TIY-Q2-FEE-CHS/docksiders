// this is where i will be creating functions related to the google api places for the search functions

$(document).ready(function() {

  // placesData.init();
  
  var map;
  var infowindow;

  function initialize() {
    var charleston = new google.maps.LatLng(32.7745350, -79.928430);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: charleston,
      zoom: 15
    });

    var request = {
      location: charleston,
      radius: 500,
      types: ['park']
    };
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

});

var placesData = {

  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    this.loadScript();
    
  },
  initEvents: function() { 

    $(".searching").on("click", this.findPlaces);
  	// $(".searching").on("click", ".placesbutton", this.findplaces);
  	
  },

loadScript: function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
},

initialize: function() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
},

findPlaces: function (event){
  event.preventDefault();
  console.log("i heard you click that map button");

  $.ajax({
      url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=true&key=AIzaSyCdAZ_1H_7QZZ8iuCC9Cas7Jr3Buzs8cxI",
      type: "GET",
      dataType: "jsonp",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("success");

      }
    });
}
};


