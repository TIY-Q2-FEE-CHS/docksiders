$(document).ready(function() {

  placesData.init();

  });

// });
  
//   var map;
//   var infowindow;

//   function initialize() {
//     var charleston = new google.maps.LatLng(32.7745350, -79.928430);

//     map = new google.maps.Map(document.getElementById('map-canvas'), {
//       center: charleston,
//       zoom: 10
//     });

//     var request = {
//       location: charleston,
//       radius: 5000,
//       types: ['public+boat+landing']
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



// this is where the rest of the functions are organized and managed

var placesData = {

  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    
  },
  initEvents: function() { 
    // $(".typeslots").on("click", ".selector", this.findType);
    $(".mapsoption").on("click", "img", this.findMe);
  
  	// $(".searching").on("click", ".placesbutton", this.findplaces);
  	
  },

  findType: function() {
    //   e.preventDefault();
    //     console.log("i hear you want to find a type");
    // // console.log(this.button);

    // var pickedthing = $(this).attr("value");
    //     console.log(pickedthing);
    //     doFilter();      
  },

  findMe: function(e) {
      e.preventDefault();
        console.log("so you want to find me");
        geolocateUser();

         function geolocateUser() {
        // If the browser supports the Geolocation API
        if (navigator.geolocation)
        {
          var positionOptions = {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          };
          navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
        }
        else
          console.log(error + "Your browser doesn't support the Geolocation API");
      }

       function writeAddressName(latLng) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          "location": latLng
        },
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK)
            document.getElementById("address").innerHTML = results[0].formatted_address;
          else
            document.getElementById("error").innerHTML += "Unable to retrieve your address" + "<br />";
        });
      }
 
      function geolocationSuccess(position) {
        var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // Write the formatted address
        writeAddressName(userLatLng);
 
        var myOptions = {
          zoom : 16,
          center : userLatLng,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        // Draw the map
        var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
        // Place the marker
        new google.maps.Marker({
          map: mapObject,
          position: userLatLng
        });
        // Draw a circle around the user position to have an idea of the current localization accuracy
        var circle = new google.maps.Circle({
          center: userLatLng,
          radius: position.coords.accuracy,
          map: mapObject,
          fillColor: '#0000FF',
          fillOpacity: 0.5,
          strokeColor: '#0000FF',
          strokeOpacity: 1.0
        });
        mapObject.fitBounds(circle.getBounds());

      }
      
      function geolocationError(positionError) {
        document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
      }
    
}

      // findMeNow: function (e){
      //   e.preventDefault;

      //   if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(success, error);
      //   } else {
      //     error('not supported');
      //   }

      // function success(position) {
      //   var s = document.querySelector('#status');
        
      //   if (s.className == 'success') {
      //     // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
      //     return;
      //   }
        
      //   s.innerHTML = "found you!";
      //   s.className = 'success';
        
      //   var mapcanvas = document.createElement('div');
      //   mapcanvas.id = 'mapcanvas';
      //   mapcanvas.style.height = '400px';
      //   mapcanvas.style.width = '560px';
          
      //   document.querySelector('article').appendChild(mapcanvas);
        
      //   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //   var myOptions = {
      //     zoom: 15,
      //     center: latlng,
      //     mapTypeControl: false,
      //     navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
      //     mapTypeId: google.maps.MapTypeId.ROADMAP
      //   };
      //   var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
        
      //   var marker = new google.maps.Marker({
      //       position: latlng, 
      //       map: map, 
      //       title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
      //   });
      //   }

      //   function error(msg) {
      //     var s = document.querySelector('#status');
      //     s.innerHTML = typeof msg == 'string' ? msg : "failed";
      //     s.className = 'fail';

      // }

// 




}
         