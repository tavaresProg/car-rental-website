document.querySelector('.login-btn').addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.toggle('active');
});

document.querySelector('#close-login-form').addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.remove('active');
});

document.querySelector('#menu-btn').addEventListener('click', () => {
    const menu = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.querySelector('.home').addEventListener('mousemove', (e) => {
    document.querySelectorAll('.home-parallax').forEach(element => {
        let speed = element.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerWidth - e.pageY * speed) / 90;
        element.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
});



const swiper = new Swiper(".vehicles-slider", {
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
