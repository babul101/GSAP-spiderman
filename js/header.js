const carousels = document.querySelectorAll('header h1,header h2')
const fadeInTimeline = gsap.timeline()

fadeInTimeline
    .set(carousels,{opacity:0})
    .to(carousels,{opacity:1,delay:1,stagger:1,duration:3})


const movementTimeline = gsap.timeline({repeat:-1})

movementTimeline
    .set(carousels,{x:0})
    .to(carousels,{x:-400,duration:6,ease:"linear"})



