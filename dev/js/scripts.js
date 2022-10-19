import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#history-middle", {
    duration: 2,
    x: 0,
    rotation: 360,
    scrollTrigger: {
        trigger: "#history-middle",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
});

gsap.to("#h1", {
    scrollTrigger: {
        trigger: "#h1",
        start: "top 8%",
        end: "bottom",
        markers: true,
        toggleActions: "play reset play reset",
        duration: 0.5,


    }
});