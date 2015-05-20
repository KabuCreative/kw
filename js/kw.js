$(document).ready(function(){
    $(document).on('click', '.get-quote', function(e){
        e.preventDefault();
        $('.quote-panel').css('top', 0);
    });

    $('.faqs').accordion({
        header: 'strong',
        heightStyle: 'content',
        active: false,
        collapsible: true,
        icons: {
            'header': 'ui-icon-down',
            'activeHeader': 'ui-icon-up'
        },
        animate: {
            duration: 200
        }
    });

    $('.tabs').tabs();

    $('.search-input').focus(function() {
        $(this).animate({
            width: "300px"
        }, 300, function() {
            // Animation complete.
        });
    });
    $('.search-input').blur(function() {
        $(this).animate({
            width: "150px"
        }, 300, function() {
            // Animation complete.
        });
    });

    var stickyNavTop = $('.site-nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.site-nav').addClass('sticky');
        } else {
            $('.site-nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });


});
