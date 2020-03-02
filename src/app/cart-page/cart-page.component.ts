import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  total: number = 0;
  constructor(public cartService: CartService) {}



  clearCart(){
    for (let item of this.cartService.items) {
      item.qty = 0;
    }
    this.cartService.items= [];
  };

  lessInCard(tour,i){
    if(tour.qty == 1){
      tour.qty--;
      this.cartService.items.splice(i,1)
    }else {
      tour.qty --;
    }
  }
  remove(tour, i){
    tour.qty = 0;
    this.cartService.items.splice(i,1);
  }

  calcSubTotal() {
    let total = 0;
    for(let item of this.cartService.items){
      total += (item.qty * item.price);
    }
    return total;
  }

  calcDiscount(){
    let subTotal = this.calcSubTotal();
    if (subTotal <=200){
      return 0;
    }
    else if (subTotal <=500){
      subTotal= subTotal*10/100;
      return subTotal;
    }
    else {
      subTotal= subTotal*20/100;
      return subTotal;
    }
  }

  ngOnInit(): void {
  }

}


