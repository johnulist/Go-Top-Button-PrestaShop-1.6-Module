$(document).ready(function() {
    var bskGoTopBtn = $('#bsktopbutton');
    
    // Show or hide the button.
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            bskGoTopBtn.fadeIn();
        } else {
            bskGoTopBtn.fadeOut();
        }
    });
    
    // Animate scroll to top.
    bskGoTopBtn.click(function() {
       $('html, body').animate({scrollTop: 0}, 300); 
    });
});