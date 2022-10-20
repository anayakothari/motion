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

gsap.to("#robot-skills", {
    scrollTrigger: {
        duration: 1,
        trigger: "#robot-skills",
        start: "#robot-start",
        end: "#robot-end",
        markers: true,
        toggleActions: "play reset play reset",

    }
});