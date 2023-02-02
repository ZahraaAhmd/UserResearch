$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $('.navbar .overlay').toggleClass('d-none');
    });
    /***
     *   AOS animation 
     */
    AOS.init({
        duration: 1000,
        disable: 'mobile', // values from 0 to 3000, with step 50ms
        once: true,
    });

});

/**** 
 * slack slider  
 * events slider 
 */


$('.work-steps').slick({
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});