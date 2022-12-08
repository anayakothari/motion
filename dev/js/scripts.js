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

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

gsap.from("#globe-stand", {
    duration: 2,
    x: 500,
    scale: 3
})


var mainTl = gsap.timeline();
mainTl.add(boxAnimation());






GSDevTools.create();