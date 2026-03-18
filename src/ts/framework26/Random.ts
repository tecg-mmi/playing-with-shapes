import {IInterval} from "./Interfaces/IInterval";

export class Random {

    static nextInteger(value: IInterval): number {
        return Math.round(Math.random() * (value.max - value.min) + value.min)
    }

}