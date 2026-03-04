import {settings} from "./settings";
import {Rectangle} from "./framework26/Rectangle";
import {Origine} from "./framework26/Origine";

const app = {
    init() {
        this.canvasElement = document.getElementById(settings.shapesCanvasID) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

        this.background = new Rectangle(this.ctx, new Origine(0, 0), this.canvasElement.width, this.canvasElement.height, settings.shapesBackgroundColor);

        this.background.draw();

    },
}

app.init();