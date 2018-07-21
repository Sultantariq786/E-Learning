import { AlphabetModel } from './../models/alphabet.model';

export class AlphabetService {
    private alphabets: AlphabetModel[] = [
        new AlphabetModel ('a', '../images/a.jpg'),
        new AlphabetModel ('b', '../images/b.jpg'),
        new AlphabetModel ('c', '../images/c.jpg'),
        new AlphabetModel ('d', '../images/d.jpg'),
        new AlphabetModel ('e', '../images/e.jpg'),
        new AlphabetModel ('f', '../images/f.jpg'),
        new AlphabetModel ('g', '../images/g.jpg'),
        new AlphabetModel ('h', '../images/h.jpg'),
        new AlphabetModel ('i', '../images/i.jpg'),
        new AlphabetModel ('j', '../images/j.jpg'),
        new AlphabetModel ('k', '../images/k.jpg'),
        new AlphabetModel ('l', '../images/l.jpg'),
        new AlphabetModel ('m', '../images/m.jpg'),
        new AlphabetModel ('n', '../images/n.jpg'),
        new AlphabetModel ('o', '../images/o.jpg'),
        new AlphabetModel ('p', '../images/p.jpg'),
        new AlphabetModel ('q', '../images/q.jpg'),
        new AlphabetModel ('r', '../images/r.jpg'),
        new AlphabetModel ('s', '../images/s.jpg'),
        new AlphabetModel ('t', '../images/t.jpg'),
        new AlphabetModel ('u', '../images/u.jpg'),
        new AlphabetModel ('v', '../images/v.jpg'),
        new AlphabetModel ('w', '../images/w.jpg'),
        new AlphabetModel ('x', '../images/x.jpg'),
        new AlphabetModel ('y', '../images/y.jpg'),
        new AlphabetModel ('z', '../images/z.jpg'),
    ];

    getAlphabet() {
        return this.alphabets;
    }

}
