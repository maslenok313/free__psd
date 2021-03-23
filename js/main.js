$(function(){

$('.slider__inner, .news__slider__inner').slick({

    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    infinite: false
});

$('select').styler();

$('.header__btn__menu').on('click', function(){
    $('.menu ul').slideToggle();
});

});
