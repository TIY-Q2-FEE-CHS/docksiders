$(document).ready(function(){

});

$(".typeslots").on("click", "button", getMyLocation);

var map;

function getMyLocation() {

	window.pickedthing = $(this).attr("value");
    console.log(pickedthing);
    $(".youradventure").removeClass('hide');
    $(".listedAdventures").empty();

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
	addNearByPlaces(latLng, pickedthing);
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

function addNearByPlaces(latLng, pickedthing) {

  var nearByService = new google.maps.places.PlacesService(map);

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
      console.log(results);
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
 
  var marker = new google.maps.Marker(markerOptions);
  var marker2 = new google.maps.Marker(markerOptions);

  if (placeResult) {
    // html = '';

    var content = '<h4>'+placeResult.name+'</h4><p>'+placeResult.vicinity+'</p>';
    addInfoWindow(marker, latLng, content);
    addResultsList(content);
  }
  else {
    var content = "You are here: " + latLng.lat() + ", " + latLng.lng();
    addInfoWindow(marker2, latLng, content);
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

function addResultsList(content){

  $(".listedAdventures").append(content);

}

