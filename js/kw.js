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
});
