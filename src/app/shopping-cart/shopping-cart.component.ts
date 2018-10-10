import { Component, OnInit } from '@angular/core';
import { CartService } from '../_additional/cart.service';

@Component({
  selector: 'ht-shopping-cart',
  template: `
      <mat-icon class="cart" [matBadge]="cartService.productsInCart">shopping_cart</mat-icon>
  `,
  styles: [`
    .cart {
      color: #9c27b0;
    }

  `]
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

}
