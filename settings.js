/**
 * Created by Mato on 14. 2. 2016.
 */
$(document).ready( function() {

    //chrome.storage.sync.clear();

    chrome.storage.sync.get( null, function(items) {

        $.each(items, function(key, value){
            $('#' + key + value).prop('checked', true);
            if(value == 1) {
                $('.radioBox label[for="' + key + value + '"]').addClass('selected');
                $('.radioBox label[for="' + key + '0"]').removeClass('selected');
            }
        });

    });

    $(".radioAction").on('change', function () {

        var radioObject = {};
        var radioValue   = $(this).val();
        var radioName    = $(this).attr('name');

        radioObject[radioName] = parseInt(radioValue);

        chrome.storage.sync.set(radioObject);

    });

    $(".cb-enable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', true);
    });
    $(".cb-disable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', false);
    });

});