import {Rectangle} from "./Rectangle";
import {ISquare} from "./interfaces/ISquare";
import {IDrawable} from "./interfaces/IDrawable";

export class Square extends Rectangle implements ISquare, IDrawable {

    public readonly size: number;


    constructor(square: ISquare) {
        super({
            ctx: square.ctx,
            color: square.color,
            origin: square.origin,
            width: square.size,
            height: square.size
        });

    }
}