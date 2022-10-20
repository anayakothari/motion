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

gsap.to("#button-container", {
    duration: 3,
    x: 0,
    rotation: -360,
    scrollTrigger: {
        trigger: "#button-container",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
});

gsap.to("#skynet", {
    duration: 2,
    x: 0,
    rotation: -360,
    scrollTrigger: {
        trigger: "#skynet",
        toggleActions: "restart pause reverse pause",
        markers: true,

    }
});