import WOW from 'wow.js';

let wow = new WOW({
    boxClass:     'animate',
    animateClass: 'animate__animated'
});
wow.init();

let preloader = document.querySelector('.preloader');
preloader.addEventListener('animationend', function(e){
    if( e.target === preloader ){
        document.body.classList.remove('ov-h');
    }
});

// let objs = [
//     '.cup',
//     '.steam',
//     '.sleeve',
//     '.lid'
// ];

// objs.forEach(function(elem){
//     let pathLen = document.querySelector(elem).getTotalLength();
//     console.log(elem + ': ' + pathLen);
// });