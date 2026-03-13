import {settings} from "./settings";
import {Rectangle} from "./framework26/Rectangle";

class Main {
    private readonly canvasElement: HTMLCanvasElement;

    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Rectangle;

    constructor() {
        this.canvasElement = document.getElementById(settings.shapeCanvasId) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d');

        this.background = new Rectangle({
            width: this.canvasElement.width,
            height: this.canvasElement.height,
            color: settings.backgroundColor,
            ctx: this.ctx,
            origin: {x: this.canvasElement.width / 2, y: this.canvasElement.height / 2}
        });

        this.background.draw();
    }
}

new Main();