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


function FoundLogo() {
    var tl = gsap.timeline();
    tl.fromTo("#svg", {
            drawSVG: "0% 5%"
        }, {
            duration: 1,
            fill: "green",
            drawSVG: "95% 100%"
        })
        .from("#line", {
            duration: 1,
            drawSVG: "0%"
        });
    return tl;
}


var mainTl = gsap.timeline();
mainTl.add(boxAnimation());






GSDevTools.create();