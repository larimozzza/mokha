document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slideToClickedSlide: true,
        keyboard:{
            enabled: true,
            onlyInViewport: true,
            pageUpDonw: true,
        },
        mousewheel:{
            sensitivity: 1,
        },
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 0,
        speed: 800,

        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 2.5,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 75,
            modifier: 2,
        },
        spaceBetween: 30,
    });
});