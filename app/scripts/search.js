// this is where i will be creating functions related to the google api places for the search functions

$(document).ready(function() {

  placesData.init();

});

var placesData = {

  init: function() {
    // this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    

  },
  initEvents: function() { 

  	this.locateYou();
  	
  },

findPlaces: function (){

	// $.ajax({
 //      url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=50&types=park&name=park&sensor=false&key=AIzaSyBVsHwZR7Gk2n4EBh0ZAvg2yDbRmMsza3g",
 //      type: "GET",
 //      dataType: "json",
 //      error: function(jqXHR, status, error) {
 //        alert("Something is Wrong" + error);
 //      },
 //      success: function(data, dataType, jqXHR) {
 //        console.log("success");

 //      }
 //    });
},

locateYou: function(){
	
                function success(position) {
                      var s = document.querySelector('#status');
                      
                      if (s.className == 'success') {
                          
                        return;
                      }
                      
                      s.innerHTML = "found you!";
                      s.className = 'success';
                      
                      var mapcanvas = document.createElement('div');
                      mapcanvas.id = 'mapcanvas';
                      mapcanvas.style.height = '400px';
                      mapcanvas.style.width = '560px';
                        
                      document.querySelector('article').appendChild(mapcanvas);
                      
                      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                      var myOptions = {
                        zoom: 15,
                        center: latlng,
                        mapTypeControl: false,
                        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                      };
                      var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
                      
                      var marker = new google.maps.Marker({
                          position: latlng, 
                          map: map, 
                          title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
                      });
                }

                function error(msg) {
                  var s = document.querySelector('#status');
                  s.innerHTML = typeof msg == 'string' ? msg : "failed";
                  s.className = 'fail';
                  
                }

                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(success, error);
                } else {
                  error('not supported');
                }
              
}

}

  	
  }

}

findPlaces: function (){

	$.ajax({
      url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=50&types=park&name=park&sensor=false&key=AIzaSyBVsHwZR7Gk2n4EBh0ZAvg2yDbRmMsza3g",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("success");

      }
    });
},


locateYou: function(){
	
                function success(position) {
                      var s = document.querySelector('#status');
                      
                      if (s.className == 'success') {
                        // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
                        return;
                      }
                      
                      s.innerHTML = "found you!";
                      s.className = 'success';
                      
                      var mapcanvas = document.createElement('div');
                      mapcanvas.id = 'mapcanvas';
                      mapcanvas.style.height = '400px';
                      mapcanvas.style.width = '560px';
                        
                      document.querySelector('article').appendChild(mapcanvas);
                      
                      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                      var myOptions = {
                        zoom: 15,
                        center: latlng,
                        mapTypeControl: false,
                        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                      };
                      var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
                      
                      var marker = new google.maps.Marker({
                          position: latlng, 
                          map: map, 
                          title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
                      });
                }

                function error(msg) {
                  var s = document.querySelector('#status');
                  s.innerHTML = typeof msg == 'string' ? msg : "failed";
                  s.className = 'fail';
                  
                }

                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(success, error);
                } else {
                  error('not supported');
                }
              
},

}

