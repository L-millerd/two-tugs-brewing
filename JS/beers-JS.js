gsap.registerPlugin(ScrollTrigger);

const beerObj = [
    {
        image: "images/big-rig.jpg",
        heading: "Big Rig",
        type: "Stout",
        description: "5.4% alc/vol | 22IBU"
    },
    {
        image: "images/docksider.jpg",
        heading: "Docksider",
        type: "Lager",
        description: "5% alc/vol | 20IBU"
    },
    {
        image: "images/the-captain.jpg",
        heading: "The Captain",
        type: "Pale Ale",
        description: "5.4% alc/vol | 28IBU"
    },

    {
        image: "images/big-buoy.jpg",
        heading: "Big Buoy",
        type: "IPA",
        description: "6.4% alc/vol | 55IBU"
    },
    {
        image: "images/high-and-dry.jpg",
        heading: "High And Dry",
        type: "Pilsner",
        description: "5.2% alc/vol | 18IBU"
    },
    {
        image: "images/white-whale.jpg",
        heading: "White Whale",
        type: "Hefeweizen",
        description: "4.7% alc/vol | 20IBU"
    },
]

let classArray = []
let triggerArray = []

$(document).ready(function () {
    for(i=0; i<beerObj.length; i++){
        let classValue = "st" + i;
        let trigger = ".st" + i;
        classArray.push(classValue);
        triggerArray.push(trigger);
    }
    for(i=0; i<beerObj.length; i++){

        $(".output").append(`
        <div class="card-container col-6 col-lg-4 ${classArray[i]}">
            <img src=${beerObj[i].image}>
            <div class="card-heading">${beerObj[i].heading}</div>
            <div class="card-text">${beerObj[i].type}</div>
            <div class="card-text">${beerObj[i].description}</div>
         </div>
    `);
    }

    for(i=0; i<triggerArray.length; i++){
        gsap.from(triggerArray[i], {
            scrollTrigger: {
                trigger: triggerArray[i], 
                // markers: true
            },
            opacity: 0,
            y: 10,
            duration: 0.3,
            delay: 1
    
        });
    }

})



