(function ($) {
    $(function () {
        /* Beginning impact slider section */
        $('#impact-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2500,
            loop: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 2500,
                        loop: true,
                        dots: true
                    }
                },
            ]

        });
        
        /* End impact slider section */
       
        /* Beginning impact- 2 slider section */
        $('#impact-slider-2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2500,
            loop: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 2500,
                        loop: true,
                        dots: true
                    }
                },
            ]

        });

        /* End impact slider section */
        
        
         /* Beginning footer back to top */
        
        $(".back-to-top").on('click touchstart', function () {
            $("html,body").animate({ scrollTop: 0 }, 2000 );
            return false
        })
        
         /* End footer back to top */
        
        
        
        /* Beginning venture section  slider */
        

            $('.venture-row').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoPlay: true,
                arrows: true,
                appendArrows: "#venture-slider-arrow-wrapper",
                mobileFirst:true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                ]
            });
       /* End venture section  slider */
        
       /* Beginning post feature slider */
      
            $('.post-item-row').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoPlay: true,
                autoplaySpeed: 2500,
                arrows: false,
                mobileFirst:true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });


            $(window).on('resize orientationchange load', function(){
                $('.venture-row').slick('resize');
                $('.post-item-row').slick('resize');
            });
        

        
        /* End post feature slider */
        
        
        
       /* Beginning Footer accordian  */
        
        $(".widget").each(function(){
            var $this = $(this);
            $this.find(" > h4").on("click touch", function(){
                $(".widget").removeClass("active")
                $(".widget .footer-menu").slideUp();
                if($this.find(".footer-menu:visible").length){
                    $(".widget").removeClass("active")
                    $(".widget .footer-menu").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".widget .footer-menu").slideUp();
                    $this.find(" > .footer-menu").slideDown();
                }
            })
        })
        
        /* End Footer accordian  */
        
        
        /* Beginning network slider section */
        $('#network-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            loop: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        loop: true,
                        dots: true
                    }
                },
            ]

        });
        
        /* End network slider section */
        
        
        /* data slider */
        
         if($("#thum-slider").length){          
            var thumSlider = $("#thum-slider");

            //console.log(lastItemIndex);            
            thumSlider.slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                waitForAnimate: true,
                asNavFor: '#content-slider',
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
                    }

                ]
            });


            var contentSlider =  $("#content-slider");

            var totalSlide = contentSlider.find(".slider-item-content").length;
            var lastItemIndex = totalSlide -1;

            contentSlider.on("init", function(event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#content-slider .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#content-slider .slick-slide").eq(0).hasClass("slick-current");
            });

            contentSlider.slick({
                dots: true,
                vertical: false,
                asNavFor: '#thum-slider',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1300,
                fade: true,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: true
                        }
                    }

                ]
            })  


        }
        /* data slider */
        
        
        
         /* data slider 2 */
        
         if($("#thum-2-slider").length){          
            var thumSlider = $("#thum-2-slider");

            //console.log(lastItemIndex);            
            thumSlider.slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                waitForAnimate: true,
                asNavFor: '#content-2-slider',
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
                    }

                ]
            });


            var contentSlider =  $("#content-2-slider");

            var totalSlide = contentSlider.find(".slider-item-content").length;
            var lastItemIndex = totalSlide -1;

            contentSlider.on("init", function(event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#content-2-slider .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#content-2-slider .slick-slide").eq(0).hasClass("slick-current");
            });

            contentSlider.slick({
                dots: true,
                vertical: false,
                asNavFor: '#thum-2-slider',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1300,
                fade: true,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: true
                        }
                    }

                ]
            })  


        }
        /* data slider 2 */
        
        var heroHeight = $(".hero-section").outerHeight(),
        scrollPoint = heroHeight/2;

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > heroHeight) {
                $('body').addClass('sticky-header');
            } else {
                $('body').removeClass('sticky-header');
            }
            if ($(window).scrollTop() > scrollPoint) {
                $('body').addClass('scrolled');
            } else {
                $('body').removeClass('scrolled');
            }
        });
        
    
        function isiPhone(){
                return (
                    (navigator.platform.indexOf("iPhone") != -1) ||
                    (navigator.platform.indexOf("iPad") != -1)
                );
            }
//        if(isiPhone()){
//           $('body').addClass('iphone');
//        }
//        if(isiPad()){
//           $('body').addClass('ipad');
//        }
        
        
        if ($(".styled-select").length) {
            $(".styled-select").selectric();
        }
        

        $('#phone-nav').on('click',function(){
            if($("body").hasClass('navShown')) {
                var winScrollTo = $('body').css('top');
                var winScroll = winScrollTo.replace('px','');
                var winScroll = Math.abs(winScroll)
                $("body").css("top",'unset');
                $("html, body").animate({ 
                    scrollTop: winScroll
                }, 10);
            } else {
                var winTop = $(window).scrollTop();
                var winTopNeg = winTop*-1;
                $("body").css("top",winTopNeg);
            }
            $("body").toggleClass("navShown");
            $("body").addClass('sticky-header');
            $(".main-nav").slideToggle();
        });


        var FloatLabel = (() => {

            // add active class and placeholder 
            var handleFocus = (e) => {
                var target = e.target;
                target.parentNode.classList.add('active');
                target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
            };

            // remove active class and placeholder
            var handleBlur = (e) => {
                var target = e.target;
                if (!target.value) {
                    target.parentNode.classList.remove('active');
                }
                target.removeAttribute('placeholder');
            };

            // register events
            var bindEvents = (element) => {
                var floatField = element.querySelector('input, textarea');
                floatField.addEventListener('focus', handleFocus);
                floatField.addEventListener('blur', handleBlur);
            };

            // get DOM elements
            var init = () => {
                var floatContainers = document.querySelectorAll('.input-row');

                floatContainers.forEach((element) => {
                    if (element.querySelector('input, textarea').value) {
                        element.classList.add('active');
                    }

                    bindEvents(element);
                });
            };

            return {
                init: init
            };
        })();

        FloatLabel.init();
    


    $('.selectric-scroll li').on('click',function(){
        var index = $(this).attr('data-index');
        $('.selectric-item').attr('data-select', index);
        $('.selectric-item').addClass('selected');
    })

    $(".fill-check").on('focus change blur',function(){
        if($.trim($(this).val()) != '') {
            $(this).parent().addClass('content-entered');
        } else {
            $(this).parent().removeClass('content-entered');
        }
    })
    
    
        
    }) // End ready function.

    // End the solutin card carousel


})(jQuery)
