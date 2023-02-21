$(document).ready(function(){

    $('.room').hover(function() {
        $(this).find('img').css('filter', 'brightness(30%)');
        $(this).find('span').toggle()
    });

    $('.room').mouseleave(function() {
        $(this).find('img').css('filter', 'brightness(1)');
    });

    $('#enterGame').click(function() {
        $('#splash').toggle();
    });
});