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

  // let menu = $('.menu_item');
  // menu.click(function(e) {
  //   let target = $($(this).attr('href'));
  //   $('html, body').animate(
  //     {
  //       scrollTop: target.offset().top
  //     },
  //     600
  //   );
  //   e.preventDefault();

  // function findPosition() {
  //       $('section').each(function() {
  //         if($(this).offset().top - $(window).scrollTop()) < 20){
  //           console.log(this)
  //           menu.removeClass('active');
  //           $('.menu_items_list')
  //             .find('[data-scroll="'+ $(this).attr('id') +'"]')
  //             .addClass('active');
  //         };
  //       };
  //     };
  //   $(window).on('scroll', function() {
  //     findPosition();
  //   });

  //   findPosition();
});
