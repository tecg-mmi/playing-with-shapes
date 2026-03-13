import {Shape} from "./Shape";
import {IRectangle} from "./interfaces/IRectangle";

export class Rectangle extends Shape implements IRectangle {
    public readonly width: number;
    public readonly height: number;

    constructor(rectangle: IRectangle) {
        super({
            ctx: rectangle.ctx,
            color: rectangle.color,
            origin: rectangle.origin,
        });
        this.width = rectangle.width;
        this.height = rectangle.height;
    }

    //draw a rectangle centered from this.x and this.y
    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origin.x - this.width / 2, this.origin.y - this.height / 2, this.width, this.height);
        this.ctx.restore();
    }

}