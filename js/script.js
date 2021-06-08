$(window).scroll(function (e) {
    var currentScrollPosition = $(window).scrollTop();
    console.log(currentScrollPosition);
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


// VideoMove on mouse hover
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