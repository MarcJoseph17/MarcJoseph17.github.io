//squares animation

gsap.from(".chucked", {
    duration: 5,
    rotation: 720,
    ease:"bounce",
    stagger: 0.5,
    x:-500,
    y:-500,
});
gsap.from(".chuck", {
    duration: 5,
    rotation: 720,
    ease:"bounce",
    stagger: 0.5,
    x:-500,
    y:-500,
});

gsap.from(".headline", {
    duration: 1.5,
    stagger: 2.5,
    opacity: 0,
    y: 150

})
gsap.from(".first", {
    duration: 2.5,
    stagger: 1.5,
    opacity: 0,
    y: 150

})

gsap.from(".second", {
    duration: 4.5,
    stagger: 2.5,
    opacity: 0,
    y: 550

})
gsap.from(".third", {
    duration: 5.5,
    stagger: 3.5,
    opacity: 0,
    y: 350

})