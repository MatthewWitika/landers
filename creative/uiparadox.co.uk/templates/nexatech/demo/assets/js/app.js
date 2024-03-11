// Template Name: Nexatech
// Template URL: https://techpedia.co.uk/template/nexatech
// Description: Nexatech - IT Solutions & Digial Agencies
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
      Init.BackToTop();
      Init.preloader();
      Init.colorMode();
      Init.salActivation();
      Init.intializeSlick();
      Init.testimonial();
      Init.modalPopup();
      Init.videoPlay();
      Init.formValidation();
      Init.contactForm();
      Init.countdownInit(".count-down", "2023/07/01");
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () { $('#preloader').hide('slow') }, 2000);
    },
    colorMode: function () {
      $('#changeColor').on('change', function () {

        if ($('body').hasClass('dark')) {
          $('body').removeClass('dark');
        } else {
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
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li><p class="fw-7 fs-95 color-white mb-24 lh-120 bg-dark ">%D</p><small class="fw-7 fs-31 color-dark font-sec lh-120 ">DAYS</small></li>\
              <li><p class="fw-7 fs-95 color-white mb-24 lh-120 bg-dark ">%H</p><small class="fw-7 fs-31 color-dark font-sec lh-120 ">HOURS</small></li>\
              <li><p class="fw-7 fs-95 color-white mb-24 lh-120 bg-dark ">%M</p><small class="fw-7 fs-31 color-dark font-sec lh-120 ">MINUTES</small></li>\
              <li><p class="fw-7 fs-95 color-white mb-24 lh-120 bg-dark ">%S</p><small class="fw-7 fs-31 color-dark font-sec lh-120 ">SECOND</small></li>'
            )
          );
        });
      }
    },
    intializeSlick: function (e) {
      if ($(".fullPage-slider").length) {
        $(".fullPage-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: '0',
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              },
            },
          ],
        })
      }
      if ($(".team-slider").length) {
        $(".team-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '0',
          autoplay: true,
          autoplaySpeed: 3000,
        })
      }
      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '0',
          autoplay: false,
          autoplaySpeed: 3000,
          dots: true,
        })
      }
      if ($(".partner-slider").length) {
        $(".partner-slider").slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '0',
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
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
        })
      }
    },
    testimonial: function(){
      $('.user').on('click',function(){
        $('.user').attr('id', '')
        $('.user').addClass('small')
        $('.user').attr('data-id', 'small')
        $(this).attr('id', 'large');

        var text = $(this).attr('data-atr');
        $('.testi-detail').hide('slow');
        $('.'+text).show('slow');
      })
    },
    modalPopup: function () {
      $('#menuToggle').on('click', function(){
        // $('.modal-popup').css('display', 'block');
        $('.modal-popup').animate({'z-index':'1000','opacity':'1'}, 'slow');
      })
      $('.close-btn').on('click', function(){
        // $('.modal-popup').css('display', 'none');
        $('.modal-popup').animate({'opacity':'0','z-index':'-10'}, 'slow');
      })
        $('.drop-btn').on('click', function(){
          var $this = $(this);
          var id =  $(this).attr('data-class');
          var check =  $(this).attr('data-check');
          if ($(window).width() >= 768 ) {
            if(check == 'true'){
              $('.drop-btn').removeClass('active');
              $('.submenu').animate({'right':'0'}, 'slow');
              $('.icon-slide').animate({'color':'#5956E9','rotate':'0deg'}, 'slow');
              $('.icon-slide').css('color','#5956E9');
              
              if ($(window).width() >= 1440) {
                $('.'+id).animate({'right':'-320px'}, 'slow');
              }else if($(window).width() >= 992 && $(window).width() < 1440) {
                $('.'+id).animate({'right':'-310px'}, 'slow');
              }else if($(window).width() >= 768 && $(window).width() < 992) {
                $('.'+id).animate({'right':'-230px'}, 'slow');
              }else if($(window).width() >= 768 && $(window).width() < 768) {
                $('.'+id).animate({'right':'0',}, 'slow');
              } 
  
              $(this).find('i').animate({'color':'#5956E9','rotate':'45deg'}, 'slow');
              $(this).addClass('active');
              $(this).find('i').css('color','#5956E9');
              $('.drop-btn').attr('data-check','true');
              $(this).attr('data-check','false');
  
            }else if(check == 'false'){
  
              $('.drop-btn').attr('data-check','false');
              $(this).attr('data-check','true');
              $(this).find('i').animate({'color':'#5956E9','rotate':'0deg'}, 'slow');
              $(this).find('i').css('color','#5956E9');
              $('.'+id).animate({'right':'0'}, 'slow');
              $(this).removeClass('active');
  
            }
            
          }

        });
    },
    videoPlay: function () {
      var $videoSrc;
      $('.play-button').click(function () {
        $videoSrc = $(this).data("src");
        $("#video").attr('src', $videoSrc);
      });
      $('.btn-close').click(function () {
        $("#video").attr('src',' ');
      });
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
          e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
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
                  "<h3 class='bg-success text-white p-3 mt-3'>Email Sent Successfully</h3>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h3 class='bg-success text-white p-3 mt-3'>There is an error</h3>";
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
  }
  Init.i();
})(window, document, jQuery);
