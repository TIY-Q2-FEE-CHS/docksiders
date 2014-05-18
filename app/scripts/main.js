$(document).ready(function(){

	exploring.init();
});


var exploring = {

	init: function() {

    // this.initStyling();
    this.initEvents();
  },

  initEvents: function() {
    $(".typeslots").on("click", ".selector", this.findType);
  	$(".mapsoption").on("click", "img", this.findMe);
  	
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

 };