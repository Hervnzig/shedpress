jQuery(document).ready(function( $ ) {
    var hash = null;
    if(window.location.hash) {
        hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        if(hash === 'rules')
            $('.shed-logo, .rules').slideToggle();
            $('.rules-button').text('back');
    } else {
        // No hash found
    }
    $('.rules-button').click( function() {
        $('.shed-logo, .rules').slideToggle();
        if( $('.rules-button').text() === 'Rules' ) {
            $('.rules-button').text('Back');
        }
        else {
            $('.rules-button').text('Rules');
        }
        if( hash === 'rules' ) {
            location.hash = '#home';
        }
        else {
            location.hash = '#rules';
        }
    });
} );