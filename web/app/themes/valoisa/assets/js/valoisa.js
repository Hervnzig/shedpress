jQuery(document).ready(function ($) {
    var hash = null;
    if (window.location.hash) {
        hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        if (hash === 'rules') {
            $('.shed-logo, .rules').slideToggle();
            $('.rules-button').text('back');
        }
        if (hash === 'info') {
            $('.shed-logo, .info').slideToggle();
            $('.info-button').text('back');
        }
    } else {
        // No hash found
    }
    $('.rules-button, .info-button').click(function () {

        rulesbutton = $('.rules-button');
        infobutton = $('.info-button');
        rules = $('.rules');
        info = $('.info');

        if ($(this).hasClass('rules-button')) {
            if (info.is(':visible')) {
                info.stop().slideUp();
                rules.slideToggle('up');
            }
            else {
                $('.shed-logo').slideToggle('up');
                rules.slideToggle('up');
            }


            if (rulesbutton.text() === 'Rules') {
                rulesbutton.text('Back');
            }
            else {
                rulesbutton.text('Rules');
            }
            if( infobutton.text() !== 'Info') {
                infobutton.text('Info');
            }
            if (hash === 'rules') {
                location.hash = '#home';
            }
            else {
                location.hash = '#rules';
            }
        }
        if($(this).hasClass('info-button')){

            if (rules.is(':visible')) {
                rules.stop().slideUp();
                info.slideToggle('up');

            }
            else {
                $('.shed-logo').slideToggle('up');
                info.slideToggle('up');
            }


            if (infobutton.text() === 'Info') {
                infobutton.text('Back');
            }
            else {
                infobutton.text('Info');
            }
            rulesbutton.text('Rules');
            if (hash === 'info') {
                location.hash = '#home';
            }
            else {
                location.hash = '#info';
            }
        }
    });
});