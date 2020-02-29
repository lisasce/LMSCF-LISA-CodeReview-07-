import { Component, OnInit } from '@angular/core';
import { tours } from '../tourInfos';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-tour-cards-list',
  templateUrl: './tour-cards-list.component.html',
  styleUrls: ['./tour-cards-list.component.css']
})
export class TourCardsListComponent implements OnInit {
tours = tours;
  constructor(public cartService: CartService) { }


  ngOnInit(): void {
  }

}
