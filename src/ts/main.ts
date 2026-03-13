import {settings} from "./settings";
import {Rectangle} from "./framework26/Rectangle";
import {IDrawable} from "./framework26/interfaces/IDrawable";
import {Random} from "./framework26/Random";
import {Square} from "./framework26/Square";

class Main {
    private readonly canvasElement: HTMLCanvasElement;

    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Rectangle;
    private readonly shapes: IDrawable[];

    constructor() {
        this.canvasElement = document.getElementById(settings.shapeCanvasId) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d');
        this.shapes = [];

        this.background = new Rectangle({
            width: this.canvasElement.width,
            height: this.canvasElement.height,
            color: settings.backgroundColor,
            ctx: this.ctx,
            origin: {x: this.canvasElement.width / 2, y: this.canvasElement.height / 2}
        });
        this.background.draw();


        this.generateShapes();
        this.drawShapes();
    }

    private generateShapes() {

        let maxWidth = this.canvasElement.width;
        maxWidth -= settings.spaceAround * 2;
        maxWidth -= settings.gap * (settings.maxShapes - 1);
        maxWidth /= settings.maxShapes;
        const minWidth = maxWidth / 2;
        let currentX = settings.spaceAround + maxWidth / 2;

        for (let i = 0; i < settings.maxShapes; i++) {
            if (Math.random() > 0.5) {
                this.shapes.push(
                    new Rectangle({
                        ctx: this.ctx,
                        origin: {
                            y: this.canvasElement.height / 2,
                            x: currentX
                        },
                        color: settings.colors[Random.nextInt({min: 0, max: settings.colors.length - 1})],
                        width: Random.nextInt({min: minWidth, max: maxWidth}),
                        height: Random.nextInt(settings.height)
                    })
                );
            } else {
                this.shapes.push(
                    new Square({
                        ctx: this.ctx,
                        origin: {
                            y: this.canvasElement.height / 2,
                            x: currentX
                        },
                        color: settings.colors[Random.nextInt({min: 0, max: settings.colors.length - 1})],
                        size: Random.nextInt({min: minWidth, max: maxWidth})/2,
                    })
                );
            }
            currentX += maxWidth + settings.gap;
        }
    }

    private drawShapes() {
        for (const shape of this.shapes) {
            shape.draw();
        }
    }
}

new Main();