import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../_additional/product.service';

@Component({
  selector: 'ht-product-search',
  template: `
  <div class="product-search">
    <label>
      Search
      <input type="text" #searchInput (keyup)="search(searchInput.value)">
    </label>
    <div class="search-results">
        <div class="result" *ngFor="let product of products">
          {{ product.name }}
        </div>
    </div>
  </div>
  `,
  styles: [`
    .product-search {
      position: relative;
    }
    .search-results {
      position: absolute;
      background-color: white;
      min-width: 300px;
      left: 53px;
      top: 20px;
    }
    .result {
      border: 1px solid blue;
    }
  `]
})
export class ProductSearchComponent {

  products: Product[];

  constructor(private productService: ProductService) { }

  search(query: string) {
    this.products = this.productService.search(query);
  }

}
