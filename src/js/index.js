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

let mobileBtn = document.querySelector('.btn-mobile');
let headerNav = document.querySelector('.main-header__nav');
function mobileMenuOpen(){
    mobileBtn.classList.add('is-open');
    headerNav.classList.add('is-open');
    document.body.classList.add('ov-h');
}

function mobileMenuClose(){
    document.body.classList.remove('ov-h');
    mobileBtn.classList.remove('is-open');
    headerNav.classList.remove('is-open');
}

mobileBtn.addEventListener('click', () => {
    if( mobileBtn.classList.contains('is-open') ){
        mobileMenuClose();
    } else{
        mobileMenuOpen();
    }
});

headerNav.addEventListener('click', e => {
    if( headerNav.classList.contains('is-open') ){
        mobileMenuClose();
    }
});