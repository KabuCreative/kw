$(document).ready(function(){

    // Activate fastclick
    $(function() {
        FastClick.attach(document.body);
    });

    // FAQ accordions and tabs

    $('.faqs').accordion({
        header: 'a',
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

    $('.tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // Header and nav

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

    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        var navHeight = $('.nav').height();

        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
            $('body').css('paddingTop', navHeight);
        } else {
            $('.nav').removeClass('sticky');
            $('body').css('paddingTop', 0);
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    $('.desktop-nav .dropdown-trigger').on('mouseenter', function(){
        $(this).find('.dropdown').show();
    });

    $('.desktop-nav .dropdown-trigger').on('mouseleave', function(){
        $(this).find('.dropdown').hide();
    });

    $('body').on('click', '.search-button.trigger', function(e){
        e.preventDefault();
        closeMobileMenu();
        $('.search-panel').toggle();
        $(this).toggleClass('active');
    });

    $('body').on('click', '.trigger-menu', function(e){
        e.preventDefault();
        closeSearchPanel();

        setDropdownHeight();
        $('.dropdown-nav').toggle();
        $(this).toggleClass('active');
    });

    $('body').on('click', '.close-search', function(e){
        e.preventDefault();
        closeSearchPanel()
    });

    $('body').on('click', '.close-menu', function(e){
        e.preventDefault();
        closeMobileMenu()
    });

    function closeSearchPanel(){
        $('.search-panel').hide();
        $('.search-button.trigger').removeClass('active');
    };

    function closeMobileMenu(){
        $('.dropdown-nav').hide();
        $('.trigger-menu').removeClass('active');
    };

    function setDropdownHeight(){
        var windowHeight = $(window).height();
        var navHeight = $('.mobile-nav').height();
        var navPosition = $('.mobile-nav').offset().top - $(window).scrollTop();
        var dropdownHeight = windowHeight - (navHeight + navPosition);

        $('.dropdown-nav').height(dropdownHeight);
    };

    $(window).on('resize scroll', function(){
        if ($(this).width() > 1130){
            closeSearchPanel();
            closeMobileMenu();
        } else {
            setDropdownHeight();
        }
    });

    // Forms

    $(document).on('click', '.get-quote', function(e){
        e.preventDefault();
        $('.quote-overlay').toggle();
        $('#quote').toggle();
    });

    $(document).on('click', '.close-quote', function(e){
        e.preventDefault();
        $('.quote-overlay').hide();
        $('#quote').hide();
    });

    $(document).on('click', '.inventory-button', function(e){
        e.preventDefault();
        $('.inventory-overlay').toggle();
        $('#inventory').toggle();
    });

    $(document).on('click', '.close-inventory, .save-inventory', function(e){
        $('.inventory-overlay').hide();
        $('#inventory').hide();
    });

    $(document).on('click', '.form-tooltip', function(e){
        e.preventDefault();
        $('.form-tooltip-img').hide();
        $(this).next('.form-tooltip-img').show();
    });

    $(document).on('click', '.form-tooltip-close', function(e){
        e.preventDefault();
        $(this).closest('.form-tooltip-img').hide();
    });

    function setMoveType(){
        moveType = $('#move-type :selected').attr('value');

        if (moveType === 'whole'){
            $('.whole-home').show();
        } else if (moveType === 'small') {
            $('.small-move').show();
        }
    }

    setMoveType();

    function setMoveLocation(){
        moveLocation = $('#move-location :selected').attr('value');

        if (moveLocation === 'local'){
            $('.local').show();
        } else if (moveLocation === 'international') {
            $('.international').show();
        }
    }

    setMoveLocation();

    function setFromCountry(){
        country = $('#from-country :selected').attr('value');

        if (country === 'australia'){
            $('.from.australia').css('display', 'inline');
        } else if (country === 'nz') {
            $('.from.nz').css('display', 'inline');
        }
    }

    setFromCountry();

    function setToCountry(){
        country = $('#to-country :selected').attr('value');

        if (country === 'uk'){
            $('.to.uk').css('display', 'inline');
        } else if (country === 'nz') {
            $('.to.nz').css('display', 'inline');
        }
    }

    setToCountry();

    $(document).on('change', '#move-type', function() {
        $('.move-type').hide();
        setMoveType();
    });

    $(document).on('change', '#move-location', function() {
        $('.move-location').hide();
        setMoveLocation();
    });

    $(document).on('change', '#from-country', function() {
        $('.from').hide();
        setFromCountry();
    });

    $(document).on('change', '#to-country', function() {
        $('.to').hide();
        setToCountry();
    });

    $(document).on('change', '#show-voucher', function() {
        if($('#show-voucher').is(":checked")) {
            $('.voucher').show();
        } else {
            $('.voucher').hide();
        }
    });


});
