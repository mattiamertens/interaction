$(window).scroll(function (e) {
    var currentScrollPosition = $(window).scrollTop();
    console.log(currentScrollPosition);
});

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

$('#player').click(function () {
    $('.video').toggleClass('show')
});

//Toggle button
$('.interessi').click(toggleviewInt);
$('.colleghi').click(toggleviewCol);

function toggleviewInt(){
    var toggleInteressi = $('.interessi');
    if(!toggleInteressi.hasClass("selected")){
     toggleInteressi.addClass('selected');
     $('.colleghi').removeClass('selected');
    }   
}
function toggleviewCol(){
    var toggleColleghi = $('.colleghi');
    if(!toggleColleghi.hasClass('selected')){
        toggleColleghi.addClass('selected');
        $('.interessi').removeClass('selected');
    }   
}


//Iphone animation
// Add scrollmagic controller
let controller = new ScrollMagic.Controller();

// Add timeline
let tl2 = anime.timeline({autoplay: false});

// Add animations
let s2a1 = {
  targets: '#two .elem img',
  scale: [0.7,0.25],
  duration: 700,
  delay: 0,
  easing: 'easeInOutSine',
  translateY: {
    value: ['40%', '0%'],}


};

let s2a2 = {
  targets: '#two .elem img',
  scale: 0.25,
  duration: 500,
};

// Add children
tl2.add(s2a1).add(s2a2);

// Get section height
let twoHeight = document.getElementById("two").clientHeight;
console.log('twoHeight: ' + twoHeight);

//------------------
//SCENE 2
//------------------

//Add second scrollmagic scene
let scene2 = new ScrollMagic.Scene({
  triggerElement: "#two",
  duration: 4500,
  triggerHook: 0,
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

// Trigger animation timeline
//Use scroll position to play animation
.on("progress", function (event) {
  tl2.seek(tl2.duration * event.progress);
})

.setPin('#two')
.addTo(controller);
