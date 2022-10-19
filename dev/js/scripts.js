import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#robotanimation", {
    duration: 1,
    x: 10,
    rotation: 360,
    scrollTrigger: {
        trigger: "#robotanimation",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
});