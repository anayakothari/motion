import {
    gsap
} from "gsap";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";
import {
    GSDevTools
} from "gsap/GSDevTools";
import {
    MorphSVGPlugin
} from "gsap/MorphSVGPlugin";

function FoundLogoAnimation() {
    var tl = gsap.timeline();
    tl.from("#globe-stand", {
        drawSVG: "75 % 75 %"
    }, {
        duration: 1,
        drawSVG: "25% 125%"
    })
    return tl;
}


var mainTl = gsap.timeline();
mainTl.add(FoundLogoAnimation());

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

gsap.from("#globe-stand", {
    duration: 2,
    x: 500,
    scale: 3,

})

gsap.from("globe", {
    duration: 2,
    x: 500,
    scale: 3,
    transformOrigin: "center",
    rotation: 100
})





GSDevTools.create();