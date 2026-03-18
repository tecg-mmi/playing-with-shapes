import {Shape} from "./Shape";
import {IRectangle} from "./Interfaces/IRectangle";
import {IDrawable} from "./Interfaces/IDrawable";

export class Rectangle extends Shape implements IRectangle, IDrawable {
    public readonly width: number;
    public readonly height: number;

    constructor(rectangle: IRectangle) {
        super({ctx: rectangle.ctx, origine: rectangle.origine, color: rectangle.color});
        this.width = rectangle.width;
        this.height = rectangle.height;
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origine.x - this.width / 2, this.origine.y - this.height / 2, this.width, this.height);
        this.ctx.restore();
    }
}