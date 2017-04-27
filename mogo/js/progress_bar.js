$(document).ready(function(){
    $('#carousel-top').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    });

    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    });

    $('#carousel2').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    });

    // Init progress bar.
    //moveProgressBar(0, 1);

    $('#carousel-top').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      moveProgressBar(currentSlide, nextSlide);
    });

    //moveProgressBar();

    function moveProgressBar(current_slide, next_silde) {
        var total = $('.progress_bar_item li').length - 1;
        console.log(total);

        var getPercent = ($('.progress_bar_item li:eq(' + current_slide + ') .progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress_bar_item li:eq(' + current_slide + ') .progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress_bar_item li:eq(' + current_slide + ') .progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);

        var slide_unprogress = current_slide;
        if (current_slide != 0) {
            slide_unprogress = current_slide -1;
        } else {
            slide_unprogress = total;
        }

        $('.progress_bar_item li:eq(' + slide_unprogress + ') .progress-bar').stop().animate({
            left: 0
        }, animationLength);
    }
});


