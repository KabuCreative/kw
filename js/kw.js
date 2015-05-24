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

    $('header .search-input').focus(function() {
        $(this).animate({
            width: "250px"
        }, 300, function() {
            // Animation complete.
        });
    });

    $('header .search-input').blur(function() {
        $(this).animate({
            width: "150px"
        }, 300, function() {
            // Animation complete.
        });
    });

    var stickyNavTop = $('.desktop-nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    $('.dropdown-trigger').on('mouseenter', function(){
        $(this).find('.dropdown').show();
    });

    $('.dropdown-trigger').on('mouseleave', function(){
        $(this).find('.dropdown').hide();
    });

    $('body').on('click', '.search-button.trigger', function(e){
        e.preventDefault();
        $('.search-panel').toggle();
    });

});
