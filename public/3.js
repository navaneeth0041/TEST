let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
// menu.onclick =() =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
// document.querySelector('#login-btn').onclick=() =>{
//     document.querySelector('.login-form-container').classList.toggle('active');
// }
// document.querySelector('#close-login-form').onclick=() =>{
//     document.querySelector('.login-form-container').classList.remove('active');
// }
window.onscroll =() =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
window.onload =() =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.querySelector('.home').onmousemove =(e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });}

    document.querySelector('.home').onmouseleave = () => {
        document.querySelectorAll('.home-parallax').forEach(elm => {
    
            elm.style.transform = `translateX(0px) translateY(0px)`;
    
        });

};
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    centeredSlides:true,
    grabCursor:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,      
    },
    },
  });


var a=0;
function pass(){
    if(a==1)
    {
    document.getElementById('passw').type='password';
    document.getElementById('pass-icon').src='eye-removebg-preview.png';
    a=0;
}
else{
    document.getElementById('passw').type='text';
    document.getElementById('pass-icon').src='eye_hide-removebg-preview.png';
    a=1;
}
}

function flipBox(element) {
    element.querySelector('.inner').classList.add('flipped');
}

function unflipBox(element) {
    element.querySelector('.inner').classList.remove('flipped');
}

function flipBox(element) {
    element.classList.add('flipped');
}

function unflipBox(element) {
    element.classList.remove('flipped');
}

var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,      },
    },
  });


var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: .1,
        },
        768: {
            slidesPerView:.2,
        },
        991: {
            slidesPerView:.3,
        },
    },
});
