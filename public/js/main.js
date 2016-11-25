$(document).ready(function() {
  getAdsTargeting();
});

function searchTargeting() {
  var searchQuery = $('.search').val(); // grab value from search input
  getAdsTargeting(searchQuery);
}

function getAdsTargeting() {
  var url = 'https://graph.facebook.com/v2.8/search?'; // url for the API 
  var params = {
    access_token: apiKey,
    type: adinterest
  };
  if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.id = marketing
  }
  $.ajax(url + $.param(params), {
    success: function (data) {
      $('.target').text(data.name);
    }
  });
}
