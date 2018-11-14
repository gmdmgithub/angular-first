import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hi its me, how are you?';
  counter = 0;

  title2: string;
  post = {
    title: 'Hi, post is saying :)',
    isFavorite: true
  };

  viewMode = 'map';

  onFavoriteChange(isFavorite: FavoriteChangeEventArgs) {
    console.log('component changed', ++this.counter, isFavorite);

  }
}
