$(document).ready(function() {
  getAdsTargeting();
});

function getAdsTargeting() {
  var url = 'GET https://graph.facebook.com/v2.8/search?type=adinterest&q=soccer&access_token=' + apiKey;
  $.ajax(url, {
    success: function (data) {
      $('.photo').text(data.name);
    }
  });
}
