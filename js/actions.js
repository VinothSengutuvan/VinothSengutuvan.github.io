$(document).ready(function() {
    // $('.key-features-wrp .content div ul li').click(function(event){
    //     $(event.target).parent().find('li').removeClass('active');
    //     $(event.target).addClass('active');
    // });

    $('.cs-dropdwn p').click(function(event){

        if(event.target.parentElement.classList.contains("open"))
            event.target.parentElement.classList.remove('open');
        else
            event.target.parentElement.classList.add('open');
    });

    $('.cs-switch').click(function(event){

        if(event.target.classList.contains("off"))
            event.target.classList.remove('off');
        else
            event.target.classList.add('off');
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./sw.js');
    }

    // $('.cs-navigation-tab li a').click(function(event){

    //     if(event.target.classList.contains("active"))
    //         event.target.classList.remove('active');
    //     else
    //         event.target.classList.add('active');
    // });

    

    // /* Slider code ---------------------------------------------------------*/
    
    // var slideCount = $('#slider ul li').length;
    // var slideWidth = $('#slider ul li').width();
    // var slideHeight = $('#slider ul li').height();
    // var sliderUlWidth = slideCount * slideWidth;

    // $('#slider').css({
    //     width: slideWidth,
    //     height: slideHeight
    // });

    // $('#slider ul').css({
    //     width: sliderUlWidth,
    //     marginLeft: -slideWidth
    // });

    // $('#slider ul li:last-child').prependTo('#slider ul');

    // function moveLeft() {
    //     $('#slider ul').animate({
    //         left: +slideWidth
    //     }, 200, function () {
    //         $('#slider ul li:last-child').prependTo('#slider ul');
    //         $('#slider ul').css('left', '');
    //     });
    // };

    // function moveRight() {
    //     $('#slider ul').animate({
    //         left: -slideWidth
    //     }, 200, function () {
    //         $('#slider ul li:first-child').appendTo('#slider ul');
    //         $('#slider ul').css('left', '');
    //     });
    // };

    // $('.control_prev').click(function () {
    //     moveLeft();
    // });

    // $('.control_next').click(function () {
    //     moveRight();
    // });

    
    // /* Sticky Header ---------------------------------------------------------*/
    
    // var lastScrollTop = 0;
    
    // $(document).on("scroll", function() {
    //     var header = $("#header");
    //     var headerHeight = $("#header").height();
    //     var afBanner = $(".af-banner").height();
    //     var viewportWidth = parseInt(document.documentElement.clientWidth);
    //     var scrollPosition = $(window).scrollTop();
        
    //     if (viewportWidth > 700) {
    // 		if (scrollPosition > (headerHeight  + 50)) {
    // 			header.addClass("sticky-header");
    //         } else {
    // 			header.removeClass("sticky-header");
    //         }
    //     }
    // });

});

