const nextIcon = '<img src="/w-arrow-left.svg">';
const prevIcon = '<img src="/w-arrow-right.svg">';

$(".home").owlCarousel({

    margin: 50,
    // center: 3,
    autoplayTimeout: 1000,
    loop: true,
    nav: true,
    navText: [nextIcon, prevIcon],
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        900: {
            items: 1,
        }
    }
})


// const snextIcon = '<img src="/w-arrow-left.svg">';
// const sprevIcon = '<img src="/w-arrow-right.svg">';

$(".home-2").owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    items: 1,
    nav: false,
    dots: true,
    dotsData: true,
    // animateOut: true,
    // animateIn: true,
    // autoplayTimeout: 1000,
    // loop: true,
    // nav: true,
    // navText: [snextIcon, sprevIcon],
    // autoplay: true,

})


$('.myslider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    dotsData: true,
});


