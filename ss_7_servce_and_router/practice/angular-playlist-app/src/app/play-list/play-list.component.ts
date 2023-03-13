import {Component, OnInit} from '@angular/core';
import {SongServiceService} from '../service/song-service.service';
import {Song} from '../model/song';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  constructor(private songService: SongServiceService) {
  }

  playList: Song[] = [];

  ngOnInit() {
    this.getAll();
  }


  private getAll() {
    this.playList = this.songService.playList;
  }
}
