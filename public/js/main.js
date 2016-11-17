$(document).ready(function() {
  getAdsTargeting();
});

function getAdsTargeting() {
  var url = 'https://graph.facebook.com/v2.8/search?type=adinterest&q=marketing&access_token=' + apiKey;
  $.ajax(url, {
    success: function (data) {
      $('.photo').text(data.name);
    }
  });
}
