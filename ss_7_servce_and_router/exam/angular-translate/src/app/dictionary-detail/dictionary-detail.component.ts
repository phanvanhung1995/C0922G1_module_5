import {Component, OnInit} from '@angular/core';
import {IWord} from "../IWord";
import {ActivatedRoute} from "@angular/router";
import {DictionaryServiceService} from "../dictionary-service.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: IWord;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const word = paraMap.get("word");
      this.word = this.dictionaryService.translate(word);
    })
  }

}
