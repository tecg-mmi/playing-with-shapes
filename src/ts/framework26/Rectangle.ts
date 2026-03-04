import {iOrigine} from "./iOrigine";

export class Rectangle {
    public readonly width: number;
    public readonly height: number;
    public readonly ctx: CanvasRenderingContext2D;
    public readonly origine: iOrigine;
    public readonly color: string;

    constructor(ctx: CanvasRenderingContext2D,
                origine: iOrigine,
                width: number,
                height: number,
                color: string
    ) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.origine = origine;
        this.color = color;
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origine.x, this.origine.y, this.width, this.height);
        this.ctx.restore();
    }
}