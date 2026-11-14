(function($) {
  "use strict";

  function menu_switch() {
    $(".control-bar").on("click", function(e) {
      e.preventDefault();
      $(".themeix-aside").toggleClass("active-menu");
    });
  }
  menu_switch();


  // Smooth scroll only when the link targets an anchor on the current page.
  // Detail pages and external links must keep their normal navigation.
  $(".themeix-nav-menu li a").on("click", function(event) {
    var destination;
    try {
      destination = new URL(this.href, window.location.href);
    } catch (error) {
      return;
    }

    var samePage = destination.origin === window.location.origin &&
      destination.pathname.replace(/\/$/, "") === window.location.pathname.replace(/\/$/, "") &&
      destination.search === window.location.search;

    if (!samePage || !destination.hash) {
      return;
    }

    var target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
    if (!target) {
      return;
    }

    event.preventDefault();
    $("html, body").animate({ scrollTop: $(target).offset().top }, 700);
  });
  

  // init Isotope
  function active_isotope() {
    if ($('.portfolio-grid').length > 0) {
      var $grid = $('.portfolio-grid').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
    }
    var filterFns = {
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
      },
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    $('.portfolio-filters').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
  }
  var windows = $(window);
  windows.on("load", function() {
    active_isotope();
  });

  function blog_post_masonry() {
    // The homepage and the case pages do not contain a masonry grid.
    if (!document.querySelector('#macy-container') || typeof Macy === 'undefined') {
      return;
    }
    new Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      useOwnImageLoader: false,
      debug: false,
      columns: 3,
      margin: {
        x: 30,
        y: 30
      },
      breakAt: {
        1200: {
          columns: 3,
          margin: {
            x: 30,
            y: 30
          }
        },
        982: {
          columns: 2
        },
        767: {
          columns: 1
        }
      }
    });
  }
  
  blog_post_masonry();


  // Initialize animations only when the plugin has loaded.
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  function scroll_to_top() {
    var offset = 300,
      offset_opacity = 1200,
      scroll_top_duration = 700,
      windows = $(window),
      back_to_top = $('.cd-top');
      windows.on("scroll", function() {
      ($(this).scrollTop() > offset) ? back_to_top.addClass('cd-is-visible'): back_to_top.removeClass('cd-is-visible cd-fade-out');
      if ($(this).scrollTop() > offset_opacity) {
        back_to_top.addClass('cd-fade-out');
      }
    });
    back_to_top.on('click', function(event) {
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0,
      }, scroll_top_duration);
    });
  }
  scroll_to_top();

  if ($.fn.niceScroll) {
    $(".themeix-aside").niceScroll({
      cursorwidth: "10px"
    });
  }

})(jQuery);