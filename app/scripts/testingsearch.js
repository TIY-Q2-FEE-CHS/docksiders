$(document).ready(function(){



});

$(".typeslots").on("click", "button", getMyLocation);


var map;
var pickedthing; 

function getMyLocation() {

	var pickedthing = $(this).attr("value");
    console.log(pickedthing);
	
	// console.log("i heard you click the map");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("Oops, no geolocation support");
  }
}

//This function is inokved asynchronously by the HTML5 geolocation API.
function displayLocation(position) {
  //The latitude and longitude values obtained from HTML 5 API.
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  //Creating a new object for using latitude and longitude values with Google map.
  var latLng = new google.maps.LatLng(latitude, longitude);

 	showMap(latLng);
	addNearByPlaces(latLng);
  	createMarker(latLng);

  //Also setting the latitude and longitude values in another div.
  var div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
}

function showMap(latLng) {
  //Setting up the map options like zoom level, map type.
  var mapOptions = {
    center: latLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //Creating the Map instance and assigning the HTML div element to render it in.
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

function addNearByPlaces(latLng) {

	

  var nearByService = new google.maps.places.PlacesService(map);
  // var idea = $(".button").attr("value");

  var request = {
    location: latLng,
    radius: 4000,
    keyword: pickedthing
  };

  nearByService.nearbySearch(request, handleNearBySearchResults);
}

function handleNearBySearchResults(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(place.geometry.location, place);
    }
  }
}

function createMarker(latLng, placeResult) {
  var markerOptions = {
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true
  }
  //Setting up the marker object to mark the location on the map canvas.
  var marker = new google.maps.Marker(markerOptions);

  if (placeResult) {
    var content = placeResult.name+"<br/>"+placeResult.vicinity+"<br/>"+placeResult.types;
    addInfoWindow(marker, latLng, content);
  }
  else {
    var content = "You are here: " + latLng.lat() + ", " + latLng.lng();
    addInfoWindow(marker, latLng, content);
  }

}

function addInfoWindow(marker, latLng, content) {
  var infoWindowOptions = {
    content: content,
    position: latLng
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, "click", function() {
    infoWindow.open(map);
  });
}

// var request = {
//     location: latLng,
//     radius: 1000,
//     keyword: ''
//   };

//   infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);

//   var request2 = {
//     location: latLng,
//     radius: 500,
//     keyword: 'beach'
//   };
//   var service2 = new google.maps.places.PlacesService(map);
//   service2.nearbySearch(request2, callback);

//   var request3 = {
//     location: latLng,
//     radius: 500,
//     keyword: 'marina'
//   };
//   var service3 = new google.maps.places.PlacesService(map);
//   service3.nearbySearch(request3, callback);

