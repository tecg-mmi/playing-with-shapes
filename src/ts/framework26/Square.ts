import {Rectangle} from "./Rectangle";
import {IOrigin} from "./IOrigin";

export class Square extends Rectangle {
    public readonly size: number;

    constructor(ctx: CanvasRenderingContext2D,
                origine: IOrigin,
                size: number,
                color: string,
                ) {
        super(ctx, origine, size, size, color);
        this.size = size;
    }


}