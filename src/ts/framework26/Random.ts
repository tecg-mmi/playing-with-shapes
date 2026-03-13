import {IMinMax} from "./interfaces/IMinMax";

export class Random {

    static nextInt(num: IMinMax): number {
        return Math.round((Math.random() * (num.max - num.min) + num.min));
    }
}