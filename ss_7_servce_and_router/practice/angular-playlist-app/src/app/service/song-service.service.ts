import {Injectable} from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor() {
  }

  playList: Song[] = [
    {
      id: 1,
      name: '2AM'
    },
    {
      id: 2,
      name: 'thằng điên'
    },
    {
      id: 3,
      name: 'cứ chill thôi'
    }
  ];

  findById(id: number) {

    return this.playList.find(item => item.id === id);
  }
}
