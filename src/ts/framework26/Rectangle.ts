import {IOrigin} from "./IOrigin";
import {Shape} from "./Shape";

export class Rectangle extends Shape {
    public readonly width: number;
    public readonly height: number;


    constructor(ctx: CanvasRenderingContext2D, origine: IOrigin, color: string, width: number, height: number) {
        super(ctx, origine, color);
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origine.x - this.width / 2, this.origine.y - this.height / 2, this.width, this.height);
        this.ctx.restore();
    }
}