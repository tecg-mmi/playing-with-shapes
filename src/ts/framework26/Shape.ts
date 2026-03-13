import {IOrigin} from "./Interfaces/IOrigin";
import {IShape} from "./Interfaces/IShape";

export abstract class Shape implements IShape {
    public readonly ctx: CanvasRenderingContext2D;
    public readonly origine: IOrigin;
    public readonly color: string;

    protected constructor(shape: IShape) {
        this.ctx = shape.ctx;
        this.origine = shape.origine;
        this.color = shape.color;
    }
}