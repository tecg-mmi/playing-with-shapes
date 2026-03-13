import {IOrigin} from "./IOrigin";

export interface IShape {
    readonly ctx: CanvasRenderingContext2D;
    readonly origine: IOrigin;
    readonly color: string;
}