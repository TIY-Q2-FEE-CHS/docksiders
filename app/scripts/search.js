$(document).ready(function() {

  placesData.init();

});
  
//   var map;
//   var infowindow;

//   function initialize() {
//     var charleston = new google.maps.LatLng(32.7745350, -79.928430);

//     map = new google.maps.Map(document.getElementById('map-canvas'), {
//       center: charleston,
//       zoom: 15
//     });

//     var request = {
//       location: charleston,
//       radius: 500,
//       types: ['park']
//     };

//     infowindow = new google.maps.InfoWindow();
//     var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);

// });

// this is where the rest of the functions are organized and managed

var placesData = {

  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    
  },
  initEvents: function() { 
    $(".typeslots").on("click", ".selector", this.findType);
    $(".mapsoption").on("click", "img", this.findMe);
  	// $(".searching").on("click", ".placesbutton", this.findplaces);
  	
  },

  findType: function(e) {
      e.preventDefault();
        console.log("i hear you want to find a type");
    // console.log(this.button);

    var pickedthing = $(this).attr("value");
        console.log(pickedthing);
       
  },

  findMe: function(e) {
      e.preventDefault();
        console.log("so you want to find me");
        geolocateUser();

      }
      
} 
         