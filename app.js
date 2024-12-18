let tl = gsap.timeline();

tl.from("h1", {
    opacity: 0,
    scale: 200,
    duration: 0.5
})

gsap.from("#red", {
    scale: 0,
    rotate: 360,
    duration: 0.8,
    delay: 0.6
})

gsap.from("#orange", {
    scale: 0,
    rotate: 360,
    duration: 0.8,
    delay: 0.6

})

gsap.from("#green", {
    scale: 0,
    rotate: 360,
    duration: 0.8,
    delay: 0.6

})

gsap.from("#yellow", {
    scale: 0,
    rotate: 360,
    duration: 0.8,
    delay: 0.6

})

tl.from("li", {
    opacity: 0,
    scale: 20,
    // duration: 0.5,
    stagger: 0.2
})

tl.from("button", {
    opacity: 0,
    scale: 20,
    duration: 0.5,
})

