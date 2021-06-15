// $(window).scroll(function (e) {
//     var currentScrollPosition = $(window).scrollTop();
//     console.log(currentScrollPosition);
// });

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





// UNDERLINE CURRENT NAVBAR SECTION
const sections = document.querySelectorAll(".u_section");
const navLi = document.querySelectorAll(".navbar .nav-link");
const winH =  window.innerHeight;

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach((element) => {
    const sectionTop = element.offsetTop;
    const sectionHeight = element.clientHeight;
     
    if (pageYOffset >= sectionTop - sectionHeight && pageYOffset > winH) {
      current = element.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    
    // $(a).removeClass('active')
    a.classList.remove("active");
    if (a.classList.contains(current + '_link')) {
      a.classList.add("active");
    }
  });
});


class HoverButton {
    constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
    }

    attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
    gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
    });

    const box = this.el.getBoundingClientRect();
    this.x = box.left + box.width * 0.5;
    this.y = box.top + box.height * 0.5;
    this.width = box.width;
    this.height = box.height;
    }

    onMouseMove(e) {
    let hover = false;
    let hoverArea = this.hover ? 0.7 : 0.5;
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt(x * x + y * y);
    if (distance < this.width * hoverArea) {
        hover = true;
        if (!this.hover) {
        this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }

    if (!hover && this.hover) {
        this.onLeave();
        this.hover = false;
    }
    }

    onHover(x, y) {
    gsap.to(this.el, {
        x: (x - this.x) * 0.3,
        y: (y - this.y) * 0.3,
        scale: 1.1,
        ease: 'power2.out',
        duration: 0.4
    });

    this.el.style.zIndex = 10;
    }
    onLeave() {
    gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7
    });

    this.el.style.zIndex = 1;
    }
}
const btn1 = document.querySelector('.custom-element:nth-child(1)');
new HoverButton(btn1);

const btn2 = document.querySelector('.custom-element:nth-child(2)');
new HoverButton(btn2);

const btn3 = document.querySelector('.custom-element:nth-child(3)');
new HoverButton(btn3);

const btn4 = document.querySelector('.custom-element:nth-child(4)');
new HoverButton(btn4);

const btn5 = document.querySelector('.custom-element:nth-child(5)');
new HoverButton(btn5);

const btn6 = document.querySelector('.custom-element:nth-child(6)');
new HoverButton(btn6);

const btn7 = document.querySelector('.custom-element:nth-child(7)');
new HoverButton(btn7);


// Videomove on mouse hover
class HoverButtonVideo {
constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
}

attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
}

calculatePosition() {
    gsap.set(this.el, {
    x: 0,
    y: 0,
    scale: 1
    });

    const box = this.el.getBoundingClientRect();
    this.x = box.left + box.width * 0.5;
    this.y = box.top + box.height * 0.5;
    this.width = box.width;
    this.height = box.height;
}

onMouseMove(e) {
    let hover = false;
    let hoverArea = this.hover ? 1 : 0.5;
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt(x * x + y * y);
    if (distance < this.width * hoverArea / 1.6) {
    hover = true;
    if (!this.hover) {
        this.hover = true;
    }
    this.onHover(e.clientX, e.clientY);
    }

    if (!hover && this.hover) {
    this.onLeave();
    this.hover = false;
    }
}

onHover(x, y) {
    gsap.to(this.el, {
    x: (x - this.x) * 0.1,
    y: (y - this.y) * 0.1,
    ease: 'power2.out',
    duration: 0.4
    });

    this.el.style.zIndex = 10;
}
onLeave() {
    gsap.to(this.el, {
    x: 0,
    y: 0,
    scale: 1,
    ease: 'elastic.out(1.2, 0.4)',
    duration: 0.7
    });

    this.el.style.zIndex = 2;
}
}
const btnvideo = document.querySelector('.video');
new HoverButtonVideo(btnvideo);

// Video player
$('#player').click(function () {
    $('.video').toggleClass('show')
});
$('.close-button').click(function() {
    $('.video').removeClass('show')
});
$(document).keyup(function(e) {
    if (e.key === "Escape") {
     $('.video').removeClass('show')
   }
});

//Toggle button
$('.interessi').click(toggleViewInt);
$('.colleghi').click(toggleViewCol);

// Hide collegues - show INTERESTS
function toggleViewInt(){
    var toggleInteressi = $('.interessi');
    if(!toggleInteressi.hasClass("selected")){
     toggleInteressi.addClass('selected');
     $('.colleghi').removeClass('selected');
     $('.svg-rect').addClass('selected-svg');
     $('.svg-circle').removeClass('selected-svg');
    }
    // $('.interessi-card').addClass('');    
    $('.colleghi-card').addClass('not-displayed');
    $('.interessi-card').removeClass('not-displayed');
}

// Hide interests - show COLLEGUES
function toggleViewCol(){
    var toggleColleghi = $('.colleghi');
    if(!toggleColleghi.hasClass('selected')){
        toggleColleghi.addClass('selected');
        $('.interessi').removeClass('selected');
        $('.svg-circle').addClass('selected-svg');
        $('.svg-rect').removeClass('selected-svg');
    }
    $('.interessi-card').addClass('not-displayed');
    $('.colleghi-card').removeClass('not-displayed');
    // $('.colleghi-card').show();
    // $('.interessi-card').hide();
}


//Iphone animation
// Add scrollmagic controller
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



// CAROUSEL
$(document).ready(function(){
    $('.category-carousel').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});