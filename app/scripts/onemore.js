  $(document).ready(function(){



});

$(".typeslots").on("click", "button", getMyLocation);

        var map;
        var infowindow;
        var latLng;

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
	// addNearByPlaces(latLng);
 //  	createMarker(latLng);

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

        // function initialize() {
        //     pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
        //     map = new google.maps.Map(document.getElementById('map'), {
        //         mapTypeId: google.maps.MapTypeId.ROADMAP,
        //         center: pyrmont,
        //         zoom: 15
        //     });
        // }

        // function btnSearch_onclick() {
        //     initialize();
        //     var request = {
        //         //                location: pyrmont,
        //         location:new google.maps.LatLng(-33.8665433, 151.1956316),
        //         radius: 500,
        //         //                types: ['food']
        //         types: [txtPlaceType.value]
        //     };
        //     infowindow = new google.maps.InfoWindow();
        //     var service = new google.maps.places.PlacesService(map);
        //     service.nearbySearch(request, GetResults);
        // }

        // function GetResults(results, status) {
        //     if (results.length > 0) {

        //         if (status == google.maps.places.PlacesServiceStatus.OK) {
        //             for (var i = 0; i < results.length; i++) {
        //                 createMarker(results[i]);
        //             }
        //         }
        //     }
        //     else {
        //         alert("No result.");
        //     }
        // }

        // function createMarker(place) {
        //     var placeLoc = place.geometry.location;
        //     var marker = new google.maps.Marker({
        //         map: map,
        //         position: place.geometry.location
        //     });

        //     google.maps.event.addListener(marker, 'click', function () {
        //         infowindow.setContent(place.name);
        //         infowindow.open(map, this);
        //     });
        // }

        // google.maps.event.addDomListener(window, 'load', initialize);

    

