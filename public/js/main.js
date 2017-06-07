$(document).ready(function() {
  getAdsTargeting();
});

function searchTargeting() {
  var searchQuery = $('.search').val(); // grab value from search input
  getAdsTargeting(searchQuery);
}

function getAdsTargeting(searchQuery) {
  var url = 'https://graph.facebook.com/v2.9/search?'; // url for the API
  var params = {
    access_token: apiKey,
    type: 'adinterest'
  };
  if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.q = 'marketing'
  }
  $.ajax(url + $.param(params), {
    success: function (entry) {
      for (var i = 0; i < entry.data.length; i++) {
     $('.name'+[i]).text(entry.data[i].name);
     $('.audience_size'+[i]).text(entry.data[i].audience_size);
    }
  }
});
}

$("search").keyup(function(event){
    if(event.keyCode == 13){
        $("btnsearch").click();
    }
});

function key_down(e) {
    if(e.keyCode === 13) {
      searchTargeting();
    }
  }

// error: function (error) {
// $('.error-message').text('An error occurred!');
// }
// });

// $.ajax(url + $.param(params), {
//   success: function (entry) {
//     for (var i = 0; i < entry.data.length; i++) {
//    $('.name').text(entry.data[i].name);
//    $('audience_size').text(entry.data[i].audience_size);
//   }
// }
// });
// }
