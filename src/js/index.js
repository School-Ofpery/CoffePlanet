import WOW from 'wow.js';
import $ from 'jquery';
import 'slick-carousel';

let wow = new WOW({
    boxClass:     'animate',
    animateClass: 'animate__animated'
});
wow.init();

$('.article-slider__container').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '.article-slider__btn_prev',
    nextArrow: '.article-slider__btn_next'
});

let preloader = document.querySelector('.preloader');
preloader.addEventListener('animationend', function(e){
    if( e.target === preloader ){
        document.body.classList.remove('ov-h');
    }
});