$(document).ready(function() {
    var bskGoTopBtn_select = $('#style');

    var bskGoTopBtn_second_form_group = $('.panel .form-group:nth-of-type(2)');

    if (bskGoTopBtn_select.val() === '1') {
        bskGoTopBtn_second_form_group.show();
    } else {
        bskGoTopBtn_second_form_group.hide();
    }

    bskGoTopBtn_select.change(function() {
        var bskGoTopBtn_select = $('#style');

        if (bskGoTopBtn_select.val() === '1') {
            bskGoTopBtn_second_form_group.show();
        } else {
            bskGoTopBtn_second_form_group.hide();
        }
    });
});