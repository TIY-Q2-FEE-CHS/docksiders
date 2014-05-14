// Starting review js for CRUD Explorer Reviews
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
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("success");

      }
    });
