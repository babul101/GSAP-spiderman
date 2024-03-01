const carousels = document.querySelectorAll('header h1,header h2')
const fadeInTimeline = gsap.timeline()

fadeInTimeline
    .set(carousels,{opacity:0})
    .to(carousels,{opacity:1,delay:1,stagger:1,duration:3})