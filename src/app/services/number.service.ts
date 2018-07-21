import { NumberModel } from './../models/number.model';

export class NumberService {
    private numbers: NumberModel[] = [
        new NumberModel (1, '../sounds/1.mp3'),
        new NumberModel (2, '../sounds/2.mp3'),
        new NumberModel (3, '../sounds/3.mp3')
    ];

    getNumber() {
        return this.numbers;
    }
}
