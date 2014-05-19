Templates = {};


Templates.reviews = [
"<% _.each(reviewdata, function(data, index, list) { %>",

          "<article reviewdata-reviewdataId=\"<%= data._id %>\">",
          "<h2 class=\"reviewerName\"><%= reviewdata.reviewerName %> <small><%= reviewdata.reviewerDate %></small></h3>",
          "<h2=\"reviewerComment\">",
            "<p><%= reviewdata.reviewerComment %></p>",
          "</h2>",
          "</article>",
        "<% }); %>"
].join("\n");