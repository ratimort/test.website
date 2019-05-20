$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});



$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 30){
$('.menu').addClass('style-menu');
} else{
$('.menu').removeClass('style-menu');
}
});

$(".scroll-item").click(function(event){   
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
});


  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       180,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


//JQUERY
$(document).ready(function(){
    $("#portfolio_grid").mixItUp();
    $(".click-scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
  });
    $(window).on('load', function () {
        var $preloader = $('#loading'),
            $loader   = $preloader.find('.loader');
            $body = $("body"),
            $htext = $(".h-text"),
        $body.removeClass("body1");
        $htext.removeClass("fade-text");
        $loader.slideUp();
        $preloader.delay(500).slideUp(500);
    });
    $(".click").click(function(){
        $("#menu-fade").fadeIn(300);
        $("body").addClass("body1");
        // $(".menu").fadeOut(100);
        $(".menu").addClass("menu-slide");
    });
    $(".click1").click(function(){
        $("#menu-fade").fadeOut(300);
        $("body").removeClass("body1");
        // $(".menu").fadeIn(100);
        $(".menu").removeClass("menu-slide");
    });
});
//JQUERY
//CAROUSEL
$('.owl-carousel').owlCarousel({
    center: true,
    smartSpeed:2000,
    items:1,
    loop:false,
    margin:60,
    // autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        400:{
            items:1
        },
        650:{
            items:2
        },
    }
});
//CAROUSEL
  // VIDEO
  $( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 0;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 0,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 0 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }
// VIDEO


//MOUSEMOVE
$(document).ready(function(){ 
   $("#owl").mousemove(
  
  function (pos) {  
  $("#floatingmes").show(); 
    $("#floatingmes").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY+10)+'px');   
    }   
   
   ).mouseleave(function() {
    $("#floatingmes").hide();  
}); 
   
});
$(document).ready(function(){ 
   $(".info").mousemove(
  
  function (pos) {   
    $("#floatingmes").show(); 
    $("#floatingmes").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY+10)+'px');  
    $(".owl-span").text("See more");
    }   
   
   ).mouseleave(function() {
    $("#floatingmes").hide();  
    $(".owl-span").text("Drag");
}); 
   
}); 
//MOUSEMOVE