// this is where i will be creating functions related to the google api places for the search functions

$(document).ready(function() {

  explorerReviews.init();

});

var explorerReviews = {
  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    

  },
  initEvents: function() {

    

  }


$.ajax({
      url: " ",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("success");

      }
    });
