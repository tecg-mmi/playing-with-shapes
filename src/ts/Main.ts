import {settings} from "./settings";
import {IDrawable} from "./framework26/interfaces/IDrawable";
import {Rectangle} from "./framework26/shapes/Rectangle";
import {Random} from "./framework26/helpers/Random";
import {Circle} from "./framework26/shapes/Circle";
import {Triangle} from "./framework26/shapes/Triangle";
import {Square} from "./framework26/shapes/Square";

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
            const random = Math.random();
            let shape: IDrawable = null;
            if (random < 0.25) {
                shape = new Rectangle({
                    ctx: this.ctx,
                    origine: {
                        y: this.canvasElement.height / 2,
                        x: currentX
                    },
                    color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})],
                    width: Random.nextInteger({min: minWidth, max: maxWidth}),
                    height: Random.nextInteger(settings.heightInterval),
                });
            } else if (random < 0.5) {
                shape = new Circle({
                    radius: Random.nextInteger({min: minWidth, max: maxWidth}) / 2,
                    ctx: this.ctx,
                    origine: {
                        y: this.canvasElement.height / 2,
                        x: currentX
                    },
                    color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})],
                })
            } else if (random < 0.75) {
                shape = new Triangle({
                    ctx: this.ctx,
                    origine: {
                        y: this.canvasElement.height / 2,
                        x: currentX
                    },
                    color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})],
                    base: Random.nextInteger({min: minWidth, max: maxWidth}),
                    height: Random.nextInteger(settings.heightInterval),
                });
            } else {
                shape = new Square({
                    ctx: this.ctx,
                    origine: {
                        y: this.canvasElement.height / 2,
                        x: currentX
                    },
                    color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})],
                    size: Random.nextInteger({min: minWidth, max: maxWidth}) / 2,
                });
            }
            this.shapes.push(shape);
            currentX += settings.gap + maxWidth;
        }
    }

    private drawShapes() {
        for (const shape of this.shapes) {
            shape.draw();
        }
    }
}

new Main();
