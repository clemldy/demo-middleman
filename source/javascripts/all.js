//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 300) {
      $(".navbar-wagon").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar-wagon").css({
        "margin-top": "0px"
      });
    }
  });
});
