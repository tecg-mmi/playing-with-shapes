import {settings} from "./settings";
import {Rectangle} from "./framework26/Rectangle";
import {Square} from "./framework26/Square";

const app = {
    init() {
        this.canvasElement = document.getElementById(settings.shapesCanvasID) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

        this.background = new Rectangle(this.ctx, {
            x: 0,
            y: 0
        }, this.canvasElement.width, this.canvasElement.height, settings.shapesBackgroundColor);

        this.background.draw();

        this.square = new Square(this.ctx, {x: 200, y: 300}, 30, 'red');

        this.square.draw();

    },
}

app.init();