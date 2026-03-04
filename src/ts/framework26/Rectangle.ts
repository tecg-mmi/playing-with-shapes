import {IOrigin} from "./IOrigin";

export class Rectangle {
    public readonly width: number;
    public readonly height: number;
    public readonly origin: IOrigin;
    public readonly color: string;
    public readonly ctx: CanvasRenderingContext2D;

    constructor(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        origin: IOrigin,
        color: string) {
        this.width = width;
        this.height = height;
        this.origin = origin;
        this.color = color;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origin.x, this.origin.y, this.width, this.height);
        this.ctx.restore();
    }

}