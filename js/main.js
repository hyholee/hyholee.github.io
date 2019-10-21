$(function() {
  // Active Under_bar
  let menu = $('.menu_items_list li');

  // Scroll Under_bar Active
  $(window).scroll(function() {
    let top_offset = 60;
    let top_scroll = $(document).scrollTop();
    let profile = $('#profile').position();
    let resume = $('#resume').position();
    let project = $('#project').position();
    let contact = $('#contact').position();

    if (top_scroll < profile.top) {
      $(menu).removeClass('active');
    }
    if (top_scroll >= profile.top - top_offset) {
      $(menu[1]).removeClass('active');
      $(menu[2]).removeClass('active');
      $(menu[3]).removeClass('active');

      $(menu[0]).addClass('active');
    }
    if (top_scroll >= resume.top - top_offset) {
      $(menu[0]).removeClass('active');
      $(menu[2]).removeClass('active');
      $(menu[3]).removeClass('active');

      $(menu[1]).addClass('active');
    }

    if (top_scroll >= project.top - top_offset) {
      $(menu[0]).removeClass('active');
      $(menu[1]).removeClass('active');
      $(menu[3]).removeClass('active');

      $(menu[2]).addClass('active');
    }

    if (top_scroll >= contact.top - top_offset) {
      $(menu[0]).removeClass('active');
      $(menu[1]).removeClass('active');
      $(menu[2]).removeClass('active');

      $(menu[3]).addClass('active');
    }
  });

  // Under-bar Active
  $(menu).on('click', function(e) {
    $(menu).removeClass('active');
    $(this).addClass('active');
  });

  // Scroll Section
  $('nav a').click(function(e) {
    $('.mobile_nav').hide();
    let section = $(this).attr('href');
    let top_offset = 55;
    let target = $(section).offset().top - top_offset;
    $('html, body').animate(
      {
        scrollTop: target
      },
      600
    );
    event.preventDefault();
  });

  // Hamburger Menu
  (function() {
    $('.menu-wrapper').on('click', function() {
      $('.hamburger-menu').toggleClass('animate');
      if ($('.mobile_nav').css('display') == 'none') {
        $('.mobile_nav').show();
      } else {
        $('.mobile_nav').hide();
      }
    });
  })();

  // Branding Hover
  $('.branding_select').on('mouseenter', function() {
    $('.hidden_branding_project').toggle();
  });
  $('.branding_select').on('mouseleave', function() {
    $('.hidden_branding_project').toggle();
  });
});
