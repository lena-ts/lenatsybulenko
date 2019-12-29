//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



$(".myButton").click(function () {

    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: 'left'};

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('#myDiv').toggle(effect, options, duration);
});

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#intro').css('min-height', windowHeight);
  };
//   setHeight();
  
  $(window).resize(function() {
//     setHeight();
  });
});