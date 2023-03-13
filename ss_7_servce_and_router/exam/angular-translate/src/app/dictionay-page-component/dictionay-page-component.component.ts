import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from "../dictionary-service.service";
import {IWord} from "../IWord";

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {

  listWord: IWord[] = [];
  word: IWord;

  constructor(private dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.findAll();
  }

}
