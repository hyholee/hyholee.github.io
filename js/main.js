$(function() {
  let menu = $('.menu_items_list li');

  // Active Underbar
  $(menu).on('click', function(e) {
    $(menu).removeClass('active');
    $(this).addClass('active');
  });

  // Scroll Section
  $('nav a').click(function(e) {
    $('.mobile_nav').hide();
    let section = $(this).attr('href');
    console.log(this);
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

  // Hamberger Menu
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

  // Branding hover
  $('.branding_select').on('mouseenter', function() {
    $('.hidden_branding_project').toggle();
  });
  $('.branding_select').on('mouseleave', function() {
    $('.hidden_branding_project').toggle();
  });

  // test
});
