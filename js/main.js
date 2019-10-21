$(function() {
  // Active Under_bar
  let menu = $('.menu_items_list li');

  $(window).scroll(function() {
    let top_offset = 55;
    let top_scroll = $(document).scrollTop();
    let low = $(document).height() - $(window).height() - $(window).scrollTop();
    let profile = $('#profile').position();
    let resume = $('#resume').position();
    let project = $('#project').position();
    let contact = $('#contact').position();

    // console.log(top);
    console.log(low);
    // console.log(profile.top);
    // console.log(resume.top);
    // console.log(project.top);
    // console.log(contact.top);

    if (top_scroll >= profile.top) {
      $(menu[0]).addClass('active');
      console.log('profile');
    }
    if (top_scroll >= resume.top) {
      $(menu[1]).addClass('active');
      console.log('resume');
    }

    if (top_scroll >= project.top) {
      $(menu[2]).addClass('active');
      console.log('project');
    }

    if (top_scroll >= contact.top) {
      $(menu[3]).addClass('active');
      console.log('contact');
    }
  });

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
