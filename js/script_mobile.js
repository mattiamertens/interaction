// Check native Lazy-loading
if ('loading' in HTMLImageElement.prototype) {
    // Supported

    const images = document.querySelectorAll('img[loading="lazy"]')
    images.forEach(img => {
        img.src = img.dataset.src;
    })
} else {
    // Not supported
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
    document.body.appendChild(script);
}


// SCROLL TO SECTION
$('.sections a, #discover').click(function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


window.addEventListener('load', function(){
    if(window.innerWidth > 768){

    let controller = new ScrollMagic.Controller();

    // Add timeline
    let tl2 = anime.timeline({autoplay: false});
    let tl3 = anime.timeline({autoplay: false});
    let tl4 = anime.timeline({autoplay: false});

    // Add animations
    let s2a1 = {
    targets: '#iphone-mockup',
    scale: [1.1, 0.5],
    duration: 700,
    delay: 0,
    easing: 'easeInOutSine',
    translateY: {
        value: ['30%', '-6%'],}
    };

    let s3a1 = {
        targets: '.text-left',
        translateX: {
            value: ['0%', '95%'],
        },
        easing: 'linear',
        delay: 200,
        duration: 200,
    }
    let s4a1 = {
        targets: '.text-right',
        translateX: {
            value: ['0%', '-95%'],
        },
        easing: 'linear',
        delay: 700,
        duration: 200,
    }

    // Add children
    tl2.add(s2a1);
    tl3.add(s3a1);
    tl4.add(s4a1);


    //Add scrollmagic scene
    let scene2 = new ScrollMagic.Scene({
        triggerElement: "#smWrapper",
        duration: 1500,
        triggerHook: 0.1,
    })

    // Add debug indicators
    // .addIndicators({
    //   colorTrigger: "black",
    //   colorStart: "blue",
    //   colorEnd: "red",
    //   indent: 10
    // })

    // Trigger animation timeline
    //Use scroll position to play animation
    .on("progress", function (event) {
    tl2.seek(tl2.duration * event.progress);
    tl3.seek(tl3.duration * event.progress);
    tl4.seek(tl4.duration * event.progress);
    })
    .setPin('#smWrapper')
    .addTo(controller);


    //Iphone animation
    // Add scrollmagic controller
    let controller_c = new ScrollMagic.Controller();

    // Add timeline
    let tl2_c = anime.timeline({autoplay: false});
    let tl3_c = anime.timeline({autoplay: false});
    let tl4_c = anime.timeline({autoplay: false});

    // Add animations
    let s2a1_c = {
    targets: '#iphone-mockup1',
    scale: [1.1, 0.5],
    duration: 700,
    delay: 0,
    easing: 'easeInOutSine',
    translateY: {
        value: ['30%', '-10%'],}
    };

    let s3a1_c = {
        targets: '.text-left_c',
        translateX: {
            value: ['0%', '95%'],
        },
        easing: 'linear',
        delay: 700,
        duration: 200,
    }
    let s4a1_c = {
        targets: '.text-right_c',
        translateX: {
            value: ['0%', '-95%'],
        },
        easing: 'linear',
        delay: 200,
        duration: 200,
    }

    // Add children
    tl2_c.add(s2a1_c);
    tl3_c.add(s3a1_c);
    tl4_c.add(s4a1_c);


    //Add scrollmagic scene
    let scene2_c = new ScrollMagic.Scene({
        triggerElement: "#smWrapper_c",
        duration: 1500,
        triggerHook: 0.1,
    })

    // Add debug indicators
    // .addIndicators({
    //   colorTrigger: "black",
    //   colorStart: "blue",
    //   colorEnd: "red",
    //   indent: 10
    // })

    // Trigger animation timeline
    //Use scroll position to play animation
    .on("progress", function (event) {
    tl2_c.seek(tl2_c.duration * event.progress);
    tl3_c.seek(tl3_c.duration * event.progress);
    tl4_c.seek(tl4_c.duration * event.progress);
    })
    .setPin('#smWrapper_c')
    .addTo(controller_c);
}
});


window.addEventListener('load', function(){
    if(window.innerWidth < 768){
        // MENU TOGGLE
        $('.menu_icon').click(function(){
            $('.menu').toggleClass('menu_vis');
            $('body').toggleClass('fix');
        });
        $('.nav-link').click(function(){
            $('.menu').removeClass('menu_vis');
        })
    }
});