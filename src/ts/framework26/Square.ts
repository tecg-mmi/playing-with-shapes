import {Rectangle} from "./Rectangle";
import {ISquare} from "./interfaces/ISquare";

export class Square extends Rectangle implements ISquare {

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