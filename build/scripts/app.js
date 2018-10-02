(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  var lickCSSUrl = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
  var slickThemeCSSUrl = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
  var slickScript = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';

  $.getScript("//platform.twitter.com/widgets.js");

  if (!$.fn.slick) {
    getStyles(lickCSSUrl);
    getStyles(slickThemeCSSUrl);
    $.getScript(slickScript).done(function () {
      //initSlider();
    });
  } else {
    initSlider();
  }

  function getStyles(url) {
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

},{}]},{},[1]);
