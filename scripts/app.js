var $about = $('#about');
var $technologies = $('#technologies');

$technologies.waypoint(function() {
  $('#technologies_main_div').addClass('animated lightSpeedIn');
  $('#technologies_main_div').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('#technologies_main_div').removeClass('animated lightSpeedIn');
  });
}, {offset: '80%'});

$about.waypoint(function() {
  $('#img_about').addClass('animated slideInRight');
  $('#img_about').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('#img_about').removeClass('animated slideInRight');
  });

  $('#text_about').addClass('animated slideInLeft');
  $('#text_about').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('#text_about').removeClass('animated slideInLeft');
  });
}, {offset: '80%'});

document.addEventListener('DOMContentLoaded', function(){
  Typed.new('.welcome-text', {
  strings: ["Let's be creative"],
  typeSpeed: 15
  });
});