import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../_additional/cart.service';
import { ProductService } from '../_additional/product.service';

@Component({
  selector: 'ht-product-card',
  template: `
      <div class="product-card">
          <h3>{{ name }}</h3>
          <div>
            <img class="product-image" [src]="url">
          </div>
          <button (click)="addToCart()">Add to Cart</button>
      </div>
  `,
  styles: [
  `
    .product-card {
      margin: 4px;
      background-color: white;
      border: 2px solid black;
      width: 140px;
      display: inline-block;
      text-align: center;
    }
    .product-image {
      width: 100px;
    }
  `
  ]
})
export class ProductCardComponent {

  @Input()
  productId: string;

  name: string;

  price: string;

  url: string;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {
    const product = productService.getRandomProduct();
    this.name = product.name;
    this.price = product.price;
    this.url = product.url;
  }

  addToCart() {
    this.cartService.addProduct();
  }

}
