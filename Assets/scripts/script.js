
// particle
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 45,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#aaa"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#f5f5f5"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 0.5,
                    "opacity_min": 0.3,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#aaa",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100
                }
            }
        },
        "retina_detect": true
    });

// page nav
    jQuery(document).ready(function($){
        // page scroll
            var contentSections = $('.nav-section'),
                navigationItems = $('#navigation a');

            updateNavigation();
            $(window).on('scroll', function(){
                updateNavigation();
                updateSMlink();
            });

            //smooth scroll to the section
            navigationItems.on('click', function(event){
                event.preventDefault();
                navigator.vibrate(100);
                smoothScroll($(this.hash));
            });

            //smooth scroll to second section
            $('.cd-scroll-down').on('click', function(event){
                event.preventDefault();
                smoothScroll($(this.hash));
            });

            function updateNavigation() {
                contentSections.each(function(){
                    $this = $(this);
                    var activeSection = $('#navigation a[href="#'+$this.attr('id')+'"]').data('number') - 1;
                    if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                        navigationItems.eq(activeSection).addClass('active');
                        contentSections.eq(activeSection).addClass('visible');
                    }else {
                        navigationItems.eq(activeSection).removeClass('active');
                        contentSections.eq(activeSection).removeClass('visible');
                    }
                });
            }

            function smoothScroll(target) {
                $('body,html').animate(
                    {'scrollTop':target.offset().top},
                    600
                );
            }

            // onscroll hide social media link
            function updateSMlink(){
                if ($(this).scrollTop()>100){
                    $('.smLink').addClass('hidden');
                }
                else{
                    $('.smLink').removeClass('hidden');
                }
            }


        /* window resize home */
            function windowSize() {
                windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
                windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
            }

            function calculateHomeHeight(){
                var homeHeight = $('#nHome')[0].scrollHeight;
                if($(window).width() <= 839){
                    $('#nHome').css('min-height', homeHeight + 'px');
                }
                else{
                    $('#nHome').css('min-height', '100vh');
                }
            }
            
            windowSize();
            calculateHomeHeight();
            
            $(window).resize(function() {
                windowSize();
                calculateHomeHeight();
            });
    });
