$(function() {
  let menu = $('.menu_items_list a.menu_item');
  menu.on('click', function(e) {
    let target = $($(this).attr('href'));
    $('html, body').animate(
      {
        scrollTop: target.offset().top
      },
      600
    );
    $(this).addClass('active');
    e.preventDefault();
  });

  console.log('check');

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
