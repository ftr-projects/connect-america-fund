$(document).ready(function() {
  var lickCSSUrl = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
  var slickThemeCSSUrl = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
  var slickScript = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';

  $.getScript("//platform.twitter.com/widgets.js");

  if(!$.fn.slick) {
    getStyles(lickCSSUrl);
    getStyles(slickThemeCSSUrl);
    $.getScript(slickScript).done(function() {
      //initSlider();
    })
  } else {
    initSlider();
  }

  function getStyles( url ) {
    $('<link/>', {
       rel: 'stylesheet',
       type: 'text/css',
       href: url
    }).appendTo('head');
  }

  function initSlider() {
    $('.hero-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 60000,
      arrows: false,
      fade: false,
      cssEase: 'linear',
      pauseOnHover: false
    });
  }

});
