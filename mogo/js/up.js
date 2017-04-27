$(window).on('scroll', function(){
  if ($(window).scrollTop() > $(window).height()) {
    $('.up').css('transform', 'none');
      } else {
    $('.up').css('transform', 'translate(0, 60px)');
      }
});
  $('.up').on('click', function() {
    $('body').animate({
    scrollTop: 0
    })
});
