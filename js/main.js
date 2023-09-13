(function($) {
    "use strict";
    jQuery(document).ready(function($) {

        /*-------------------------------   
        BOOTSTARP SCROLLLSPY
        ---------------------------------*/
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        })
        /*-------------------------------
        SCROLL NAVIGATION
        ---------------------------------*/
        $('.scroll-down').on('click', function(e) {
            $("html, body").animate({
                scrollTop: 650
            }, 500);
            return false;
        });
        /*-------------------------------
        STICKY NAVIGATION
        ---------------------------------*/
        $(".header-area").sticky({
            topSpacing: 0
        });
        /*-------------------------------
        SCROLL TO TOP
        ---------------------------------*/
        $.scrollUp({
            scrollText: "<i class='fa fa-rocket'></i>",
            animation: 'fade'
        });
        /*-------------------------------
        Blog Carousel
        ---------------------------------*/
        $('.slider-area').owlCarousel({
            singleItem: true,
            pagination: false,
            autoPlay: true,
            transitionStyle: "fade"
        });
        /*-------------------------------
        VIDEO PLAYER HOME
        ---------------------------------*/
        $(".video-player").YTPlayer({
            videoURL: "https://www.youtube.com/watch?v=O5LmKx0CH2E",
            containment: '#video-container',
            mute: false,
            loop: true,
            startAt: 0,
            showControls: false
        });
        /*-------------------------------
        SMOOTH SCROLLING
        ---------------------------------*/
        $('li.smooth-menu a').on('click', function(e) {
            var $anchor = $(this);
            var headerH = '48';
            $('html,body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        /*-------------------------------
    Skill Js
    ---------------------------------*/
        if (typeof($.fn.knob) != 'undefined') {
            $('.knob').each(function() {
                var $this = $(this),
                    knobVal = $this.attr('data-rel');
                $this.knob({
                    'draw': function() {
                        $(this.i).val(this.cv + '%')
                    }
                });
                $this.appear(function() {
                    $({
                        value: 0
                    })
                        .animate({
                            value: knobVal
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.val(Math.ceil(this.value)).trigger('change');
                            }
                        });
                }, {
                    accX: 0,
                    accY: -150
                });
            });
        }
        /*-------------------------------
        Blog Carousel
        ---------------------------------*/
        $('.carousel-blog').owlCarousel({
            singleItem: true,
            pagination: true,
            autoPlay: true,
            transitionStyle: "fade"
        });
        $('.home-banner').owlCarousel({
            singleItem: true,
            pagination: false,
            autoPlay: true,
            transitionStyle: "fade",
        });
        /*-------------------------------
        Riview Carousel
        ---------------------------------*/
        $('.review-wrap').owlCarousel({
            singleItem: true,
            pagination: true,
            autoPlay: false,
        });
        /*-------------------------------
        Typed Js
        ---------------------------------*/
        $(".element").typed({
            strings: ["Graphic Designer.", "Web Designer.", "Web developer."],
            typeSpeed: -1,
            loop: true,
        });
        /*-------------------------------
        Brand Carousel
        ---------------------------------*/
        $('.brand-wrap').owlCarousel({
            items: 5,
            center: true,
            loop: true,
            pagination: false,
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
        /*-------------------------------
        Portfolio Isotope
        ---------------------------------*/
        $('.portfolio-menu li').on('click', function(e) {
            $(".portfolio-menu li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".grid").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
        /*-------------------------------
        Masonary Portfolio
        ---------------------------------*/
        $('.grid').isotope({
            itemSelector: '.grid-item',
            resizesContainer: false,
            layoutMode: 'masonry',
        });

        /*-------------------------------
        Parallax Effect
        ---------------------------------*/
        $('.parallax-bg').parallax("50%", .1);
        $('.home-parallax').parallax("50%", .4);

        /*-------------------------------
        Counter Js
        ---------------------------------*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    jQuery(window).on('load', function() {
        $('#rx-resume-preloader-container').fadeOut('slow');
    });

}(jQuery));

//Google Map
/*var myCenter = new google.maps.LatLng(44.1946963, -102.4899473);
function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 5,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("google-map"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);*/
//Map Js
var wWidth = $(window).width();
var googleMapSelector = $('#google-map'),
    myCenter = new google.maps.LatLng(40.920036, -77.4922133);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 10,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#222"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f4f4f4"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation:google.maps.Animation.BOUNCE,
        map: map,
    });
    setTimeout(function() {
        $('.gm-style-iw').parent().addClass('hello');
    }, 1000);
}
if (googleMapSelector.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}



