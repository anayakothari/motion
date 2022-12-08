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

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


function Customlogo() {
    var tl = gsap.timeline();
    tl.from("#leftshape", {
            drawSVG: "0% 100%",
            duration: 1,
            x: 50
        })
        .from("#leftshape-fill", {
            opacity: 0,
            stroke: "#164B87",
            delay: .25,
            duration: 1
        })
        .from("#rightshape", {
            drawSVG: "0% 100%",
            duration: 1,
            x: -50
        })
        .from("#rightshape-fill", {
            opacity: 0,
            stroke: "#164B87",
            duration: 1
        })
        .from("#second-s", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#third-e", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#third-t", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#second-t", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-l", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#second-e", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-m", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#third-e", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-n", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-t", {
            drawSVG: "0% 100%",
            scale: .75,
            x: -200
        });

    return tl;

}


var mainTl = gsap.timeline();
mainTl.add(Customlogo());






GSDevTools.create();