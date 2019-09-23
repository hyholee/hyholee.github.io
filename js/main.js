$(function() {
  let menu = $('.menu_items_list li');

  // Active Underbar
  $(menu).on('click', function(e) {
    $(menu).removeClass('active');
    $(this).addClass('active');
  });

  // Scroll Section
  $('nav a').click(function(e) {
    let section = $(this).attr('href');
    console.log(this);
    let top_offset = 60;
    let target = $(section).offset().top - top_offset;
    $('html, body').animate(
      {
        scrollTop: target
      },
      600
    );
    event.preventDefault();
  });

  // Hamberger Menu
  (function() {
    $('.menu-wrapper').on('click', function() {
      $('.hamburger-menu').toggleClass('animate');
    });
  })();

  // Branding hover
  $('.branding_select').on('mouseenter', function() {
    $('.hidden_branding_project').toggle();
  });
  $('.branding_select').on('mouseleave', function() {
    $('.hidden_branding_project').toggle();
  });

  // test
  $('.chichi').on('click', function(e) {
    console.log('check');
  });
});
