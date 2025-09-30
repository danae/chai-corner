const $ = require('jquery');

$(function() {
  $('#caramell-trigger').on('click', function (e) {
    $('#caramell')[0].play();
  });
});