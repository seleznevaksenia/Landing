$(document).ready(function () {
    $('.work__item--name').on("click", function (event) {
        if($(this).index() === 0 || $(this).index() === 2){
            $(this).next().children().toggleClass('work__large__picture');
            $(this).next().toggleClass('work__zindex');
        }else{
            $(this).prev().children().toggleClass('work__large__picture');
            $(this).prev().toggleClass('work__zindex');
        }
    });

});

