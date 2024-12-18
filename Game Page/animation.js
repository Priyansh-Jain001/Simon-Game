let tl = gsap.timeline();

tl.from("h1, h3",{
    opacity: 0,
    scale: 20,
    duration: 0.5
})

gsap.from(".red", {
    x: -1000,
    y: -1000,
    duration: 0.4,
    delay: 1,
    
})

gsap.from(".orange", {
    x: 1000,
    y: -1000,
    duration:0.4,
    delay: 1,
    
})

gsap.from(".green", {
    x: -1000,
    y: 1000,
    duration: 0.4,
    delay: 1, 
    
})

gsap.from(".yellow", {
    x: 1000,
    y: 1000,
    duration: 0.4,
    delay: 1,


})

tl.from(".button", {
    opacity: 0,
    scale: 20,
    // duration: 0.5,
})

