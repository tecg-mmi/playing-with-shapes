import {Rectangle} from "./framework26/Rectangle";
import {settings} from "./settings";
import {IDrawable} from "./framework26/Interfaces/IDrawable";
import {Random} from "./framework26/Random";

class Main {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    background: Rectangle;
    shapes: IDrawable[];

    constructor() {
        this.canvasElement = document.getElementById(settings.shapesCanvasID) as HTMLCanvasElement;

        this.ctx = this.canvasElement.getContext('2d');

        this.shapes = [];

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
        this.generateShapes();
        this.drawShapes()

    }

    private generateShapes() {
        const maxWidth = (this.canvasElement.width - settings.spaceAround * 2 - (settings.maxShapes - 1) * settings.gap) / settings.maxShapes;

        const minWidth = maxWidth * settings.minWidthRadio;

        let currentX = settings.spaceAround + maxWidth / 2;
        for (let i = 0; i < settings.maxShapes; i++) {
            this.shapes.push(
                new Rectangle({
                    ctx: this.ctx,
                    origine: {
                        y: this.canvasElement.height / 2,
                        x: currentX
                    },
                    color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})],
                    width: Random.nextInteger({min: minWidth, max: maxWidth}),
                    height: Random.nextInteger(settings.heightInterval),
                })
            );
            currentX += settings.gap + maxWidth

        }
    }

    private drawShapes() {
        for (const shape of this.shapes) {
            shape.draw();
        }
    }
}

new Main();
