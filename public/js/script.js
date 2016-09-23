"use strict";
(function(){
  console.log("jquery and script file loaded");

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  $(document).ready(function(){
    $('#nav-bar').pushpin({ top: $('#nav-bar').offset().top });
  });


})();
