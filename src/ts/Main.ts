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

        // this.background = new Rectangle(
        //     {
        //         ctx:this.ctx,
        //         canvas:this.canvasElement,
        //         color:"red",
        //     }
        // );


        this.background.draw();
        this.rect1.draw();
    }
}

new Main();