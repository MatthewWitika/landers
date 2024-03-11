// Template Name: Bytez
// Template URL: https://techplinth.com/templates/bytez
// Description: Bytez - IT Solutions & Digial Agencies
// Version: 1.0.0
(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.preloader();
      Init.colorMode();
      Init.salActivation();
      Init.showReview();
      Init.teamMemberShow();
      Init.serviceShow();
      Init.faqShow();
      Init.animations();
      Init.contactForm();
      Init.formValidation();
      Init.intializeSlick();
      Init.countdownInit(".countdown", "2024/04/01");
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    preloader: function () {
        setTimeout(function(){ $('.preloader').hide('slow') }, 1000);
    },
    colorMode: function(){
      $('#changeColor').on('change',function(){
          if($('body').hasClass('dark')){
            $('body').removeClass('dark');
          }else{
            $('body').addClass('dark');
          }
      })

    },
    salActivation: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    showReview: function(){
      $('.review-btn').on('click',function(){
        var id = $(this).attr('data-atr');
        $('.review-block').hide('slow');
        $('#'+id).show('slow');
        console.log(id)
      })
    },
    teamMemberShow: function(e){
      $('.member').on('click',function(){
        var id = $(this).attr("id");
        $('.member').removeClass('active');
        $(this).addClass('active');
        $('.member-details').hide('slow');
        $('.'+id).show('slow');
      })
    },

    serviceShow: function(e){
      $('.service_title').on('click',function(){
        var id = $(this).attr("id");
        $('.service_title').removeClass('active');
        $(this).addClass('active');
        $('.service-detail').hide('slow');
        $('.'+id).show('slow');
      })
    },

    faqShow: function(e){
      $('.question').on('click',function(){
        var id = $(this).attr("id");
        $('.question').removeClass('active');
        $(this).addClass('active');
        $('.faq-detail').hide('slow');
        $('.'+id).show('slow');
      })
    },

    animations: function(){
  
      // Testimonial Image Animation
      gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

      gsap.to(".animation_image_zoom img", {
        scrollTrigger: {
          trigger: ".testimonials_area_1",
          start: "top center+=100",
          markers: false
        },
        opacity: 1,
        scale: 1,
        x: 20,
        ease: "power2.out",
        duration: 1.5,
        stagger: {
          each: 0.3
        }
      })

    },

    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          var _selector = _self.closest("input,textarea");
          _self.closest("div").find("input,textarea").removeAttr("style");
          _self.find(".error-msg").remove();
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "Email Sent Successfully";
              } else {
                document.getElementById("message").innerHTML =
                  "There is an error";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },

    formValidation: function () {
      if ($("form").length) {
        $("form").validate();
      }
    },

    intializeSlick: function (e) {

      if ($(".page_slider").length) {
        $('.page_slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          pauseOnHover: false,
          pauseOnFocus: false,
          cssEase: 'linear',
          arrows: false,
          swipe: false,
          infinite: true,
          useTransform: false,
        });
        $(".prev-btn").click(function () {
          $(".page_slider").slick("slickPrev");
        });
      
        $(".next-btn").click(function () {
          $(".page_slider").slick("slickNext");
        });
      }
      

      if ($(".partnersSlider").length) {
        $('.partnersSlider').slick({
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          arrows: false,
          swipe: false,
          slidesToShow: 5,
          cssEase: 'linear',
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }

      if ($(".portfolioSlider").length) {
        $('.portfolioSlider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          pauseOnHover: false,
          pauseOnFocus: false,
          cssEase: 'linear',
          arrows: false,
          swipe: false,
          infinite: true,

          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }

      if ($(".portfolioSliderrtl").length) {
        $('.portfolioSliderrtl').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          pauseOnHover: false,
          pauseOnFocus: false,
          cssEase: 'linear',
          arrows: false,
          swipe: false,
          rtl: true,
          infinite: true,

          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li><span class="number">%D</span><br><span class="number-text">Days</span></li>\
                <li><span class="number">%H</span><br><span class="number-text">Hours</span></li>\
                <li><span class="number">%M</span><br><span class="number-text">Minutes</span></li>\
                <li><span class="number">%S</span><br><span class="number-text">Seconds</span></li>'
            )
          );
        });
      }
    },
  }
  Init.i();
})(window, document, jQuery);


