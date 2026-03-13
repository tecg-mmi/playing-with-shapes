import {Rectangle} from "./framework26/Rectangle";
import {settings} from "./settings";

class Main {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    background: Rectangle;
    rect1: Rectangle;

    constructor() {
        this.canvasElement = document.getElementById(settings.shapesCanvasID) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d');

        this.background = new Rectangle(
            {
                ctx: this.ctx,
                color: settings.shapesBackgroundColor,
                origine: {x: this.canvasElement.width / 2, y: this.canvasElement.height / 2},
                width: this.canvasElement.width,
                height: this.canvasElement.height
            }
        );
        this.background.draw();

    }
}

new Main();