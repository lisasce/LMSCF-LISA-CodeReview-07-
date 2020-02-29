import { Injectable } from '@angular/core';
import {TourCardsListComponent} from './tour-cards-list/tour-cards-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items =[];
  constructor() {}

  addToCart(tour){
    if(tour.qty == 0){
      tour.qty++;
      this.items.push(tour);
    } else {
      for(let item of this.items){
        (item.title == tour.title) ? item.qty++ : null ;
      }
    }
    console.table(this.items);
  };


}
