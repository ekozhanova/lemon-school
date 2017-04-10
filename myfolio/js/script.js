$(document).ready(function(){
  $("#menu li a").click(function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });

  $('#main-menu').slicknav({
    init: function() {
      $("ul.slicknav_nav li a").click(function(){
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500);
      });
    }
  });
});
