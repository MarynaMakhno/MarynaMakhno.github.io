$ (function () {
    $('.popup_close').on('click', function () {
        $('overlay').hide();
        $('popup').hide();
    });
    $('.zoom').on('click', function () {
        $('overlay').show();
        $('popup').show();
    });
});

