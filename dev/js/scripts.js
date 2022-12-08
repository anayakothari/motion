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


function CustomLogoAnimation() {
    var tl = gsap.timeline();
    tl.from("#leftshape", {
            drawSVG: "25% 100%",
            duration: 1,
        })
        .from("#globe-stand-fill", {
            opacity: 0,
            delay: .25,
            duration: 1
        })
        .from("#first-w", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#first-w-fill", {
            opacity: 0,

            duration: .25
        })
        .from("#second-w", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#second-w-fill", {
            opacity: 0,

            duration: .25
        })
        .from("#letter-a", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-a-fill", {
            opacity: 0,

            duration: .25
        })
        .from("#letter-n", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-n-fill", {
            opacity: 0,

            duration: .25
        })
        .from("#letter-d", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-d-fill", {
            opacity: 0,

            duration: .25
        })
        .from("#letter-e", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-e-fill", {
            opacity: 0,

            duration: .25
        })

        .from("#letter-r", {
            drawSVG: "75% 100%",
            scale: .75,
            x: -200
        })
        .from("#letter-r-fill", {
            opacity: 0,

            duration: .25
        });
    return tl;

}

var mainTl = gsap.timeline();
mainTl.add(boxAnimation());






GSDevTools.create();