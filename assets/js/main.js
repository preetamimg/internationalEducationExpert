// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}


// hero slider start
var swiper = new Swiper(".heroslider", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    effect: "fade",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// * Glight Box Video
var lightboxVideo = GLightbox({
    selector: '.glightbox1'
});

const lightbox = GLightbox();
    lightbox.on('open', () => {
    // Do something
});


$('.Testimonials').owlCarousel({
    loop: true,
    items: 16,
    margin: 15,
    nav: true,
    dots: true,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1.5,
        },
        1200: {
            items: 2,
        }
    },
});

$('.gallaryy').owlCarousel({
    loop: true,
    items: 16,
    margin: 10,
    nav: true,
    dots: true,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2.5,
        },
        768: {
            items: 3.5,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 4,
        }
    },
});


$('.country').owlCarousel({
    loop: true,
    items: 16,
    margin: 10,
    nav: true,
    dots: true,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.5,
        },
        450: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5,
        },
        1400: {
            items: 6,
        }
    },
}); 