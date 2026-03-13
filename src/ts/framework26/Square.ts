import {Rectangle} from "./Rectangle";
import {ISquare} from "./Interfaces/ISquare";

export class Square extends Rectangle implements ISquare {
    public readonly size: number;

    constructor(square: ISquare) {
        super({ctx: square.ctx, origine: square.origine, color: square.color, width: square.size, height: square.size});
        this.size = square.size;
    }


}