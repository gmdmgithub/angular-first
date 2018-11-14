import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isWrong'] // another method for input - better but problem in case of refactor
})
export class FavoriteComponent implements OnInit {

  // @Input() isFavorite:boolean;//expose to outsite
  // adding alias - good for refactor
  @Input('is-favorite') isFavorite: boolean; // expose to outsite

  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit(this.isFavorite);
    // passing the object
    this.click.emit({newValue: this.isFavorite});
  }

}

// define interface to control passing args and have intelicence
export interface FavoriteChangeEventArgs {
  newState: boolean;
}
