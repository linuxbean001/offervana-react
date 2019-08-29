/*============================================================
    Sticky Navigation
============================================================*/


$(document).ready(function(){
   /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function(){
    // alert(1);

    var windowWidth = $(window).width();
    if ($(window).scrollTop() > 190 & windowWidth > 300){
      $('#sticky-nav').addClass("sticky");
    //   $('#sticky-nav .logo-wrap').addClass("shrink");
    } else {
      $('#sticky-nav').removeClass("sticky");
    //   $('#sticky-nav .logo-wrap').removeClass("shrink");
    }

    if ($(window).scrollTop() > 200 & windowWidth > 300){
      $('#sticky-nav').addClass("offset");
    } else {
      $('#sticky-nav').removeClass("offset");
    }

    if ($(window).scrollTop() > 500 & windowWidth > 300){
      $('#sticky-nav').addClass("scrolling");
    } else {
      $('#sticky-nav').removeClass("scrolling");
    }


    if ($(window).scrollTop() > 190 ){
      $('.navbar-fixed-top').addClass("sticky");
    } else {
      $('.navbar-fixed-top').removeClass("sticky");
    }

  }); 
});


//jQuery(window).scroll(function () {
//        if (jQuery(window).scrollTop() >200) {
//            jQuery("#navigation").css("background-color","#fff");
//            jQuery("#navigation").addClass("animated-nav");
//        } else {
//            jQuery("#navigation").css("background-color","transparent");
//            jQuery("#navigation").removeClass("animated-nav");
//        }
//    });


/*============================================================
    .navbar-responsive
============================================================*/


        (function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1000;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);




// Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });
