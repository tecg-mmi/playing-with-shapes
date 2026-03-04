import {Rectangle} from "./Rectangle";
import {iOrigine} from "./iOrigine";

export class Square extends Rectangle {
    public readonly size: number;

    constructor(ctx: CanvasRenderingContext2D,
                origine: iOrigine,
                size: number,
                color: string,
                ) {
        super(ctx, origine, size, size, color);
        this.size = size;
    }


}