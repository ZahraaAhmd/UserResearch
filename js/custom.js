/**** 
 * slack slider  
 * events slider 
 */

$('.tech-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 4.15,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3.1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2.1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.career-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 2.1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1
        }
    }]
});

// convert img to code 
$(function() {
    //Change the class name, if it has to be applied for more SVG elements
    jQuery('.product-icon img').each(function() {
        var $img = jQuery(this); // The image
        var imgID = $img.attr('id'); // ID attribute
        var imgClass = $img.attr('class'); // Class Name
        var imgURL = $img.attr('src'); // URL of the SVG image

        jQuery.get(imgURL, function(data) {
            //The data param contains the XML data of the SVG image
            //alert(new XMLSerializer().serializeToString(data));

            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Give the image's ID to the SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }

            // Give the image's class to the SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml'); //Returns as XML
    });
});

$(document).ready(function() {

    /*
     * make header fixed on top 
     */
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 90) {
            $("header").addClass("header-sticky");
        }
        if ($(window).scrollTop() > 400) {
            $(".header-sticky").addClass("sticky-active");
        } else if ($(window).scrollTop() < 90) {
            $("header").removeClass("header-sticky sticky-active");
        }
    });

    /*
     * make slick slider container padding left as other content
     */
    let Screenwidth = $(window).width();
    let padding = Screenwidth - 1215;
    if (Screenwidth > 1230) {
        $(".slider-container").css("padding-left", padding / 2);
    }

    /*
     * count up figures numbers when scroll to secction
     */
    var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (pageName != null && pageName.toLowerCase() == "index.php") {
        $(window).scroll(startCounter);

        function startCounter() {
            let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
            let divPos = document.querySelector('.CT-figures .row').offsetTop;

            if (scrollY > divPos) {
                $(window).off("scroll", startCounter);

                $('.number').each(function() {
                    var $this = $(this);
                    jQuery({
                        Counter: 0
                    }).animate({
                        Counter: $this.text().replace(/,/g, '')
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(commaSeparateNumber(Math.floor(this.Counter)));
                        },
                        complete: function() {
                            $this.text(commaSeparateNumber(this.Counter));
                            //alert('finished');
                        }
                    });
                });

                function commaSeparateNumber(num) {
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }
        }
    }
});