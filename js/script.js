const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');
const loginBtn = document.querySelector('.login-btn');
const closeLoginBtn = document.querySelector('#close-login-form');
const home = document.querySelector('.home');


loginBtn.onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');

}

closeLoginBtn.onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');

}

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

home.onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(element => {
        let speed = element.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerWidth - e.pageY * speed) / 90;
        element.style.transform = `translateX(${y}px) translateY(${x}px)`;
    })
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination"
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    clickable: true,
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

