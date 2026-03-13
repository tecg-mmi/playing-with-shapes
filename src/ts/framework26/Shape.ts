import {IOrigin} from "./interfaces/IOrigin";
import {IShape} from "./interfaces/IShape";

export abstract class Shape implements IShape {
    public readonly origin: IOrigin;
    public readonly color: string;
    public readonly ctx: CanvasRenderingContext2D;

    protected constructor(shape: IShape) {
        this.origin = shape.origin;
        this.color = shape.color;
        this.ctx = shape.ctx;
    }
}