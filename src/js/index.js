import $ from "jquery";
import twemoji from "@twemoji/api";


// Event handler when the document is loaded
$(function() {
  // Parse the document with twemoji
  twemoji.parse(document.body);

  // Music trigger
  $('#music-trigger').on('click', function (e) {
    $('#music')[0].play();
  });
});