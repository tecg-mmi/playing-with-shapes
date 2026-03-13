import {IOrigin} from "./IOrigin";

export class Shape {
    public readonly ctx: CanvasRenderingContext2D;
    public readonly origine: IOrigin;
    public readonly color: string;

    constructor(ctx: CanvasRenderingContext2D, origine: IOrigin, color: string) {
        this.ctx = ctx;
        this.origine = origine;
        this.color = color;
    }
}