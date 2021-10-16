let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tlN = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tlSquare = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "300%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

tl.fromTo('.slide', {y:0}, {y:-400});
tl2.fromTo('.logo', {scale:5}, {scale:1, top:"1rem", left:"5rem", x: '50%', y: '50%'});
tlN.fromTo('.nav', {background: "transparent"}, {background:"white"});
tlSquare.fromTo('.square', {x:0, y:0}, {x:700, y:-700, rotate: 150});
