$(document).ready(function(){

	Mapbox.init();

});


Mapbox= {

	init: function(){
		initStyling();
		initEvents();
	},

	initStyling: function() {

	},

	initEvents: function() {
		$(".mapboxk")
	}

	findingLocation: function() {

		$.ajax({
            url: "http://api.tiles.mapbox.com/v3/examples.map-zr0njcqy.json?callback=jsonloaded",
            type: 'GET',
            data: todoItem,
            error: function() {
              alert("YOU FUCKED UP");
            },
            success: function(data, dataType, jqXHR) {
                
 
           }
          });
	}
}






