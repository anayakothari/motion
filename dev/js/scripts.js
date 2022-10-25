import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function historymiddle(paragraphrotation) {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#history-middle",
            scrub: true,
            markers: true,
            start: "center bottom"
        }
    })
    tl.to("history-middle")
}

var mainTL = gsap.timeline();
mainTL.add(paragraphrotation())
    .add(paragraphrotation())


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