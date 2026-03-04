import {settings} from "./settings";
import {Rectangle} from "./framework26/Rectangle";

const app = {
    init() {
        this.canvasElement = document.getElementById(settings.shapeCanvasId) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

        this.background = new Rectangle(
            this.ctx,
            this.canvasElement.width,
            this.canvasElement.height,
            {
            x: 0,
            y: 0,
            },

            settings.backgroundColor);

        this.background.draw();


    },
}

app.init();