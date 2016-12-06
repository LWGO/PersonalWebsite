$(document).ready(function() {
  getAdsTargeting();
});
function searchTargeting() {
  var searchQuery = $('.search').val(); // grab value from search input
  getAdsTargeting(searchQuery);
}

function getAdsTargeting(searchQuery) {
  var url = 'https://graph.facebook.com/v2.8/search?'; // url for the API
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
    success: function (response.data) {
      $.each(response.data) function(entry){
      $('.name').text(data.name);
      $('.audience_size').text(data.audience_size);
    },
    error: function (error) {
    $('.error-message').text('An error occurred!');
    }
  });
}
