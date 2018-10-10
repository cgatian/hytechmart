import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  productsInCart = 0;


  addProduct() {
    this.productsInCart++;
  }

}
