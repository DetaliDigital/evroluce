$(document).ready(function ($) {

    $('body').on('click','#oneclickmodal_form_submit', function(event) {
        event.preventDefault();
        mvtForms2.prepareForm($(this),false);
        mvtForms2.send($('#oneclickmodal_form'));
    });


    mvtForms2.callbacks.success = function(response) {
        $("body").overhang({
        type: "success",
        message: response.data.answer
        });

        yaCounter27810060.reachGoal(response.form);

        if(response.form == 'oneclick') {
          $('.one_click_form_block_wrap').removeClass('active');
          $(this).closest('.content_right_column .content_right_column_in > div').removeClass('active');
          $('.content_right_column .price_block').addClass('active');
        }

        $('#' + response.form + '_form').reset();

        if (response.form == 'oneclickmodal') {
        $('#' + response.form + '_form_submit').hide();
        }

        if(response.form == 'file') {
        for (var i = 0; i < Dropzones.length; i++) {
        Dropzones[i].removeAllFiles(true);
        }
        }
    };

    mvtForms2.callbacks.error = function(response) {
        $("body").overhang({
        type: "error",
        message: response.data.message
        });
    };
});
