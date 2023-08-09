gsap.registerPlugin(ScrollTrigger);


let triggerObj = [".st1", ".st2", ".st3", ".st4"]
console.log(triggerObj)

for(i=0; i<triggerObj.length; i++){
    
    gsap.from(triggerObj[i], {
        scrollTrigger: {
            trigger: triggerObj[i], 
            // markers: true
        },
        opacity: 0,
        y: 5,
        duration: 0.3,
        delay: 0.5,

    });
}
