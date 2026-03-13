import {IOrigin} from "./IOrigin";

export interface IShape {
    readonly origin: IOrigin;
    readonly color: string;
    readonly ctx: CanvasRenderingContext2D;
}