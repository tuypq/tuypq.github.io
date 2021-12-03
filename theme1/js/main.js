/*
	Template Name: Vinazine
	Author: Themewinter
	Author URI: https://themeforest.net/user/tripples
	Description: vinazine
   Version: 1.0

   ================================
   table of content
   =================================
   1.   dropdown menu
   2.   breking news slider
   3.   featured post slider
   4.   Most populer slider
   5.   Gallery popup
   6.   video popup
   7.   video slider

*/
//

$(function ($) {
		$(".btn-search").click(function(){
		  $(".search-input").toggleClass("active").focus;
		  $(this).toggleClass("animate");
		  $(".search-input").val("");
		});

    "use strict";

/*Search GET on submit start
*/
	$('.nav-search-button').click(function(){
		$('.header-middle').find('.search-form').show();
	})
	$('.nav-search-close-button').click(function(){
		$('.header-middle').find('.search-form').hide();
	})

   $('.search-form').on("submit", function(){
   	var searchKeyword = $('.search-input').val().replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,"");
		console.log(searchKeyword);
			$.ajax({
			    url: 'search',
			    type: 'GET',
			    data: jQuery.param({ s: searchKeyword}) ,
			    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			    success: function (response) {
			        console.log("success");
			    },
			    error: function () {
			        console.log("error");
			    }
			}); 
		});

/*Search GET on submit end
*/

/**-------------------------------------------------
     *Paging Nuce News
     *----------------------------------------------------**/
     let searchParams = new URLSearchParams(window.location.search);
     let param = searchParams.get('pageIndex');
     if (param == '1') {
     	$("#btn-prev-page").attr("href", "");
     	//preventDefault();
     }
     else if (param == null) {
     	$('#1').closest("a").addClass('active');
     	
     }
     else if (param == totalPages) {
     	$("#btn-next-page").attr("href", "");
     }
     
     var i=0;
     $('.btn-page-no').each(function() {
		  //console.log( index + ": " + $( this ).text() );
		  if ($(this).attr("id") == param) {
	     	$(this).closest("a").addClass('active');
	     	//console.log(this);
	     	i++;
	     }
		  
		});
		
		//console.log(param);
     /* ----------------------------------------------------------- */
	/*  
    /* ----------------------------------------------------------- */


	

    $(window).on('load', function() {

        /*==========================================================
                    4. Preloader
        =======================================================================*/
        setTimeout(() => {
            $('#preloader').addClass('loaded');
        }, 1000);
    });

    $('.preloader-cancel-btn').on('click', function(event) {
		event.preventDefault();
		if (!$('#preloader').hasClass('loaded')) {
			$('#preloader').addClass('loaded');
		}
   });
   



    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
       $(window).on('scroll', function () {

            /**Fixed header**/
            if ($(window).scrollTop() > 250) {
               $('.ts-menu-sticky').addClass('sticky fade_down_effect');
            } else {
               $('.ts-menu-sticky').removeClass('sticky fade_down_effect');
            }
      });

     /* ----------------------------------------------------------- */
	/*  index search
    /* ----------------------------------------------------------- */

    if ($(".header-search").length > 0) {
        var todg = true;
        $(".header-search >a").on("click", function (e) {
            e.preventDefault();
            if (todg) {
                $(".header-search-form").fadeIn("slow");
                todg = false;
            } else {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }
        });

        $(document).on('mouseup', function (e) {
            var container = $(".header-search");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }

        });
    }


    /*======================== 
         navigation 
    ==========================*/
    if ($('.ts-main-menu').length > 0) {
        $(".ts-main-menu").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });
    }

    /*======================== 
        breaking news  
   ==========================*/
    if ($('#breaking_slider').length > 0) {
        $('#breaking_slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplayTimeout: 5000,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
        })
    }
/*======================== 
        nuce-news  
   ==========================*/
   if ($('#nuce-news-slider').length > 0) {
    $('#nuce-news-slider').owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: true,
        autoplayTimeout: 10000,
        autoplay: true,
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag:true,
        navText: [
        "<img src='theme1/images/icon/left-arrow-block-2.svg' >",
        "<img src='theme1/images/icon/right-arrow-block-2.svg' >"
        ],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }
    });
}

/*======================== 
        nuce-news-home-slider  
   ==========================*/
   if ($('#nuce-news-home-slider').length > 0) {
    $('#nuce-news-home-slider').owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        nav: true,
        autoplayTimeout: 2000,
        autoplay: true,
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag:true,
        navText: [
        "<img src='theme1/images/icon/left-arrow-block-2.svg' >",
        "<img src='theme1/images/icon/right-arrow-block-2.svg' >"
        ],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 1,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }
    });
}




    /*======================== 
        featured post  
   ==========================*/
    if ($('#featured-slider').length > 0) {
        $('#featured-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            autoplayTimeout: 5000,
            autoplay: true,
            animateOut: 'slideOutLeft',
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
        });
    }
    /*======================== 
        featured slider 2 
   ==========================*/
    if ($('#featured-slider-2').length > 0) {
        $('#featured-slider-2').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: false,
            responsiveClass: true,
             autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            animateOut: 'slideOutLeft',

        });
    }
    
    /*======================== 
        nuce home header slider 
   ==========================*/
    if ($('#home-header-slider').length > 0) {
        $('#home-header-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: true,
            autoplayTimeout: 10000,
            autoplay: true,
            responsiveClass: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:true,
            animateOut: 'slideOutLeft',
            navText: [
				        "<img src='theme1/images/icon/left-arrow-block-2.svg' >",
				        "<img src='theme1/images/icon/right-arrow-block-2.svg' >"
				        ],

        });
    }    
    
     /*======================== 
        scholarship slider 
   ==========================*/
   if ($('#scholarship-slider').length > 0) {
    $('#scholarship-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplayTimeout: 10000,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag:true,
        nav: false,
        navText: [
            "",
            ""
            ],
    });
}  

/*======================== 
        scholarship slider 
   ==========================*/
   if ($('#start-up-slider').length > 0) {
    $('#start-up-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplayTimeout: 10000,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag:true,
        nav: false,
        navText: [
            "",
            ""
            ],
    });
}  
    
   /*======================== 
        nuce-ads-slider  
   ==========================*/
   if ($('#nuce-ads-slider').length > 0) {
    $('#nuce-ads-slider').owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: true,
        autoplayTimeout: 10000,
        autoplay: true,
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag:true,
        navText: [
        "<img src='theme1/images/icon/left-arrow.svg' >", 
        "<img src='theme1/images/icon/right-arrow.svg' >"
        ],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 3,
                },
                // breakpoint from 480 up
                480: {
                    items: 4,
                },
                // breakpoint from 768 up
                768: {
                    items: 5,
                },
                // breakpoint from 768 up
                1200: {
                    items: 6,
                }
            }
    });
}

/*======================== 
        nuce-event-slider  
   ==========================*/
   if ($('#nuce-event-slider').length > 0) {
    $('#nuce-event-slider').owlCarousel({
        loop: true,
        items: 4,
        dots: false,
        nav: true,
        autoplayTimeout: 10000,
        autoplay: true,
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag:true,
        navText: [
        "<img src='/theme1/images/icon/left-arrow.svg' >", 
        "<img src='/theme1/images/icon/right-arrow.svg' >"
        ],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 1,
                },
                // breakpoint from 768 up
                768: {
                    items: 3,
                },
                // breakpoint from 768 up
                1200: {
                    items: 4,
                }
            }
    });
}
    
    
    /*======================== 
        featured slider 3
   ==========================*/
    if ($('#featured-slider-3').length > 0) {
        $('#featured-slider-3').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'slideOutLeft',
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsiveClass: true,
        });
    }
    /*======================== 
        featured slider 3
   ==========================*/
    if ($('#featured-slider-4').length > 0) {
        $('#featured-slider-4').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            animateOut: 'slideOutLeft',
            autoplay: true,
            responsiveClass: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        });
    }
    /*======================== 
        featured slider 5
   ==========================*/
    if ($('#featured-slider-5').length > 0) {
        $('#featured-slider-5').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'slideOutLeft',
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsiveClass: true,
        });
    }
    /*======================== 
        most populer  
   ==========================*/
    if ($('.most-populers').length > 0) {
        $('.most-populers').owlCarousel({
            items: 3,
            dots: false,
            loop: true,
            nav: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }
        });
    }

    /*======================== 
        hot topics 
   ==========================*/
    if ($('#hot-topics-slider').length > 0) {
        $('#hot-topics-slider').owlCarousel({
            nav: false,
            items: 4,
            margin: 30,
            reponsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 4,
                }
            }
        });
    }
    /*======================== 
      more news slider
   ==========================*/
    if ($('#more-news-slider').length > 0) {
        $('#more-news-slider').owlCarousel({
            nav: false,
            items: 3,
            margin: 30,
            reponsiveClass: true,
            dots: true,
            slideSpeed: 600,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }

        });
    }

     /* ----------------------------------------------------------- */
	/*  hero banner slider on sport index
    /* ----------------------------------------------------------- */
    if ($("#hero-slider").length > 0) {
        $("#hero-slider").owlCarousel({
            margin: 10,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            items: 1,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            animateOut: 'slideOutLeft',
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        });

        $('#hero-slider .owl-dots').wrap('<div class="container slider-dot-item"><div class="row"><div class="col-lg-9"></div></div></div>');
        $('#hero-slider .owl-nav').wrap('<div class="container slider-arrow-item"><div class="row"><div class="col-lg-9"></div></div></div>');
    }
    /* ----------------------------------------------------------- */
	/*  post slider
    /* ----------------------------------------------------------- */

    $("#post-slider1").owlCarousel({
         margin: 10,
         loop: true,
         dots: false,
         nav: true,
         autoplay: true,
         autoplaySpeed: 3000,
         items: 1,
         autoplayHoverPause: true,
         mouseDrag: false,
         touchDrag:false,
         animateOut: 'fadeOut',
         navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
    });

    /* ----------------------------------------------------------- */
	/*  blog post slider for blog page
    /* ----------------------------------------------------------- */

    $(".blog-post-slider-item").owlCarousel({
         margin: 10,
         dots: false,
         nav: true,
         items: 1,
         autoplayHoverPause: true,
         mouseDrag: false,
         touchDrag:false,
         animateOut: 'fadeOut',
         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    /* ----------------------------------------------------------- */
	/*  marquee slider
	/* ----------------------------------------------------------- */
    if ($('.slick.marquee').length > 0) {
        $('.slick.marquee').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }
    /* ----------------------------------------------------------- */
	/*  breking news slider
	/* ----------------------------------------------------------- */
    if ($('#breaking_slider1').length > 0) {
        $('#breaking_slider1').slick({
            speed: 10000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }


    /* ----------------------------------------------------------- */
	/*  Popup
	/* ----------------------------------------------------------- */

    if ($('.gallery-popup').length > 0) {
        $('.gallery-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    /* ----------------------------------------------------------- */
	/*  single post video
    /* ----------------------------------------------------------- */
    if ($('.ts-play-btn').length > 0) {
        $('.ts-play-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    if ($('.ts-video-btn').length > 0) {
        $('.ts-video-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }


    if ($('.ts-video-icon').length > 0) {
        $('.ts-video-icon').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }

    $(document).ready(function () {

        var s = $('.video-slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_date = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text = s.find('.slide-text'),
            slide_more = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {

                (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
            } else if ($(this).hasClass('prev')) {

                (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
            }
            TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) })


            //CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });

    });


    if ($("#video-tab-scrollbar").length > 0) {
        $("#video-tab-scrollbar").mCustomScrollbar({
            mouseWheel: true,
            scrollButtons: { enable: true }
        });
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
        } else {
             $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').on('click', function () {
         $('#back-to-top').tooltip('hide');
         $('body,html').animate({
              scrollTop: 0
         }, 800);
         return false;
    });
    
    $('#back-to-top').tooltip('hide');
   

});

//display block ul cha trong list-category có chứa thẻ a active
$('.list-category a.active').each((i, item) => {
    const parents = $(item).parents('ul').get();
    for (let index in parents) {
        $(parents[index]).css("display", "block");
    }

    let li = $(item).parents('li').get();
    for (let index in li) {
        const atag = $(li[index]).children('a[item-type=category]').get();
        for (let j in atag) {
            const arrowRight = $(atag[j]).find('.m-arrow-right').get();
            for (let k in arrowRight) {
                $(arrowRight[k]).attr('class', 'm-arrow-bottom');
            }
        }
    }
});

$('.list-category a[item-type=category]').each((i, item) => {
    const siblings = $(item).siblings('ul').get()
    if (siblings.length > 0) {
        $(item).click(() => {
            const childArrowRight = $(item).find('.m-arrow-right').get();
            if (childArrowRight.length > 0) {
                for (let index in childArrowRight) {
                    $(childArrowRight[index]).attr('class', 'm-arrow-bottom');
                }
            } else {
                const childArrowBottom = $(item).find('.m-arrow-bottom').get();
                for (let index in childArrowBottom) {
                    $(childArrowBottom[index]).attr('class', 'm-arrow-right');
                }
            }
            for (let index in siblings) {
                if ($(siblings[index]).css('display') != 'block') {
                    $(siblings[index]).css('display', 'block');
                } else {
                    $(siblings[index]).css('display', 'none');
                }
            }
        });
    }
});

$('#btn-shared-fb').attr('href', `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&display=popup`);

if ($('#home-banner').length > 0) {
    $('#home-banner').owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: true,
        autoplayTimeout: 10000,
        autoplay: true,
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: true,
        navText: [
            "<img src='theme1/images/icon/left-arrow-block-2.svg' >",
            "<img src='theme1/images/icon/right-arrow-block-2.svg' >"
        ],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            768: {
                items: 1,
            },
            // breakpoint from 768 up
            1200: {
                items: 1,
            }
        }
    });
}

$('iframe').css('max-width', '100%');
