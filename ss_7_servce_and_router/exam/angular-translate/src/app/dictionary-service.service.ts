import {Injectable} from '@angular/core';
import {IWord} from "./IWord";
import {strict} from "assert";

const result: string = ''

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  iWord: IWord[] = [
    {word: 'red', mean: 'đỏ'},
    {word: 'blue', mean: 'xanh dương'},
    {word: 'green', mean: 'xanh lá'},
    {word: 'yellow', mean: 'vàng'}
  ]

  constructor() {
  }

  translate(word: string) {
    return this.iWord.filter(item => item.word === word)[0];
  }

  findAll():IWord[] {
    return this.iWord
  }

}
