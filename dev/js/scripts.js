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


function CustomLogo() {
    var tl = gsap.timeline();
    tl.from("#leftshape", {
            drawSVG: "0% 100%",
            duration: 1,
            x: 50
        })
        .from("#leftshape-fill", {
            opacity: 0,
            stroke: "#164B87",
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
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#third-e", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#third-t", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#second-t", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-l", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#second-e", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-m", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#third-e", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-n", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-t", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#music-m", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#music-u", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#music-s", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#music-i", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#music-c", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#school-s", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#school-c", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#school-o1", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#school-o2", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })
        .from("#school-l", {
            drawSVG: "25% 100%",
            scale: .75,
            x: -200
        })

    return tl;

}


var mainTl = gsap.timeline();
mainTl.add(CustomLogo());






GSDevTools.create();