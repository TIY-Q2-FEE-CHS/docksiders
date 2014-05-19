$(document).ready(function() {

  explorerReviews.init();

});

var explorerReviews = {


  init: function() {
    // this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    this.render();

  },
  initEvents: function() {
    $(".reviewcontent").on("click", explorerReviews.showModal);
    $(".modal-footer").on("click", ".saveReview", this.completeReview);
    $(".hikingReviews").on("click", this.getHikingReviews);
    $(".boatingReviews").on("click", this.getBoatingReviews);
    $(".campingReviews").on("click", this.getCampingReviews);
    $(".fishingReviews").on("click", this.getFishingReviews);
    $(".picnicReviews").on("click", this.getPicnicReviews);
    $(".sightseeingReviews").on("click", this.getSightseeingReviews);
    // $(".footer").on("click", ".deleter", this.removeReview);
    
  },

  render: function($el, template, data) {
    var tmpl = _.template(template, data);

    $el.html(tmpl);
  },

  showHiking: function() {
    $(".reviewContent").html()
  },

  completeReview: function (e) {
    e.preventDefault();
    console.log("consider this submitted");
    
    var name = $('.reviewerName').val();
    var activity = $('.newReviewTitle').val();
    var ourDate = $('.reviewerDate').val();
    var email = $('.reviewerEmail').val();
    var comment = $('.reviewerContent').val();

    var submittedReview = {
      reviewerName: name,
      activityName: activity,
      reviewDate: ourDate,
      reviewerEmail: email,
      reviewerComment: comment,
      relatedActivity: "hiking"
    };

  console.log(submittedReview);

  $.ajax({
        url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
        type: "POST",
        data: submittedReview,
        dataType: "JSON",
        error: function(jqXHR, status, error) {
          alert("Something is Wrong" + error);
        },
        success: function(data, dataType, jqXHR) {
         $("#addReview").modal("toggle");
          console.log("successful");

        }
      });
},

getHikingReviews: function() {
  $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
          window.reviewdata = data;
          var html= '';
          for (var i = 0; i < reviewdata.length; i++){
            if(reviewdata[i].activityName== "Hiking") {
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          }
        };
        $(".parkpics").html(html);


      }
    });
},

getFishingReviews: function() {
  console.log("working");
  $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
            if(reviewdata[i].activityName== "Fishing") {
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          }
        }
          console.log(html);

         $(".parkpics").html(html);

      }
    });
},
getBoatingReviews: function() {
  console.log("working");
  $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
            if(reviewdata[i].activityName== "Boating") {
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          }
        }
          console.log(html);

         $(".parkpics").html(html);

      }
    });
},

getCampingReviews: function() {
  console.log("working");
  $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
            if(reviewdata[i].activityName== "Camping") {
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          }
        }
          console.log(html);

         $(".parkpics").html(html);

      }
    });
},
getPicnicReviews: function() {
  console.log("working");
  $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
            if(reviewdata[i].activityName== "Picnic") {
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          }
        }
          console.log(html);

         $(".parkpics").html(html);

      }
    });
},
getSightseeingReviews: function() {
  console.log("working");
  $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
            if(reviewdata[i].activityName== "Sight Seeing") {
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          }
        }
          console.log(html);

         $(".parkpics").html(html);

      }
    });
},


showReview: function (e) {
    e.preventDefault();
    console.log("this is a button");

$.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
          html += '<h3>'+ reviewdata[i].reviewerName + "</h3>" + "<p>" + reviewdata[i].reviewerComment + '</p>'+ "<br>";
          };
          console.log(html);

         $(".parkpics").html(html);

      }
    });

}
 
// removeReview: function(e) {
//   e.preventDefault();
//     // var $thisPost = $(this).closest("article")
//     // var postId = $thisPost.data("postid");
//     $.ajax({
//       url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews/5379939d0ee8f2020000000c",
//       type: "DELETE",
//       dataType:"JSON",
//       error: function(jqXHR, status, error) {
//         alert("couldnt delete");
//       }, 
//       success: function(data) {
//         console.log("got rid of that one");
         
//       }
//     });
//   }
};


// stuff that i am working with

// myBlog.init();

// });

// var myBlog = {
//   init: function() {
//     this.initStyling();
//     this.initEvents();
//   },
//   initStyling: function() {
    
//     this.renderPosts();
//     this.renderSideBar();

//   },
//   initEvents: function() {

//     $(".mainContent").on("click", "button", function() {
//       $("#myModal").modal();
//     });

//     $(".mainContent").on("click", ".editPost", function(e) {
//       e.preventDefault();
//       var postId = $(this).closest("article").data("postid");
//       myBlog.renderModalPostDetail(postId);
//       $("#editPostModal").modal();
//     });
//     $("#editPostModal").on("click", ".submitUpdatePost", function(e) {
//         var postId = $("#editPostId").val();
//        myBlog.updatePost(postId);
//     });

//     $(".mainContent").on("click", ".removePost", this.removePost);

//     $("#newPostForm").on("submit", this.addPost);

//   },
//   render: function($el, template, data) {
//       var tmpl = _.template(template, data);

//       $el.html(tmpl);

//   },
//   renderPosts: function() {

//     $.ajax({
//       url: "http://tiy-fee-rest.herokuapp.com/collections/myBlog",
//       type: "GET",
//       dataType: "json",
//       error: function(jqXHR, wstatus, error) {
//         alert("you broke the internet");
//       },
//       success: function(data, dataType, jqXHR) {
        
//         var posts = window.posts = data; // have to make global for underscore to work
//         myBlog.render($("section"), Templates.post, posts);
         

//       }
//     });

//   },
//   renderSideBar: function() {
//     $.ajax({
//       url:"http://tiy-fee-rest.herokuapp.com/collections/myBlog",
//       type: "GET",
//       error: function(jqXHR, status, error) {
//         alert("error rendering sidebar: " + error);
//       },
//       success: function(data) {
//         var titles = window.titles = _.pluck(data, "title");
//         myBlog.render($(".recentPosts"), Templates.sidebarPosts, titles);
//       }
//     });
//   },
//   addPost: function(e) {
//     e.preventDefault();

//         var newPost = {
//               title: $(".newPostTitle").val(),
//               date: new Date(),
//               content: myBlog.encodeToString($(".postContentForm").val()),
//               author: $(".authorPostForm").val()
//         };
//     $.ajax({
//       url: "http://tiy-fee-rest.herokuapp.com/collections/myBlog",
//       type: "POST",
//       data: newPost, 
//       dataType: "json",
//       error: function(jqXHR, status, error) {
//         alert("couldn't add post");
//       },
//       success: function(data, dataType, jqXHR) {
//         $(".newPostTitle").val("");
//         $(".authorPostForm").val("");
//         $(".postContentForm").val(""); 
//         $("#myModal").modal("hide");
//         myBlog.renderPosts();  
//         myBlog.renderSideBar();
//       }
//     });

//   },
  // removePost: function() {
  //   var $thisPost = $(this).closest("article")
  //   var postId = $thisPost.data("postid");
  //   $.ajax({
  //     url: "http://tiy-fee-rest.herokuapp.com/collections/myBlog/" + postId,
  //     type: "DELETE",
  //     error: function(jqXHR, status, error) {
  //       alert("couldnt delete");
  //     }, 
  //     success: function(data) {
  //        myBlog.renderPosts();  
  //        myBlog.renderSideBar();
  //     }
  //   });
  // },
  // updatePost: function(postId) {
  //    console.log("work in update method");
  //    var id = postId;
  //       var editPost = {
  //             title: $(".editPostTitle").val(),
  //             date: new Date(),
  //             content: this.encodeToString($(".editContentForm").val()),
  //             author: $(".editAuthorPostForm").val()
  //       };
//     $.ajax({
//       url: "http://tiy-fee-rest.herokuapp.com/collections/myBlog/" + id,
//       type: "PUT",
//       data: editPost, 
//       error: function(jqXHR, status, error) {
//         alert("couldn't add post: " + error);
//       },
//       success: function(data, dataType, jqXHR) {
//         console.log("in edit post");
//         $("#editPostModal").modal("hide");
//         myBlog.renderPosts();  
//         myBlog.renderSideBar();
//       }
//     });

//   },
//   renderModalPostDetail: function(postId) {

//     $.ajax({
//       url: "http://tiy-fee-rest.herokuapp.com/collections/explorerReviews/" + postId,
//       type: "GET",
//       dataType: "json",
//       error: function(jqXHR, status, error) {
//         alert("render post detail is broken");
//       },
//       success: function(data, dataType, jqXHR) {
        
//         var post = window.post = data; // have to make global for underscore to work
//         myBlog.render($("#editPostForm"),Templates.editModal, post);

//       }
//     });

//   },
//   encodeToString: function(str) {
//     return str.replace(/[&<>"']/g, function($0) {
//         return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
//     });
// }

// };

