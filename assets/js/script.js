$(document).ready(function(){
    // sidebar toggle
    $('#tp-sidebar-show-btn').click(function(){
        $(".tp-nav-blk-3").addClass('show-sidebar-nav');
    });
    $('#tp-sidebar-hide-btn').click(function(){
        $(".tp-nav-blk-3").removeClass('show-sidebar-nav');
    })

    // animation and transition stopper on window resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    // owl carousel
    $('#hdr-slides').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    // owl carousel
    $('.feat-offers-slides').owlCarousel({
        loop:true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{ items:1 },
            800:{ items:2 },
            1200:{ items: 3 },
            1400:{ items:4 }
        },
        navText: ["<img src = 'assets/images/misc-icons/chevron-left.svg'>", "<img src = 'assets/images/misc-icons/chevron-right.svg'>"]
    });
});