import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: string;
  url: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'T-Shirt',
    price: '19.99',
    url: './assets/tshirt.png'
  },
  {
    id: '2',
    name: 'Belt',
    price: '21.99',
    url: './assets/belt.png'
  },
  {
    id: '3',
    name: 'Indy Hat',
    price: '65.99',
    url: './assets/indy-hat.png'
  },
  {
    id: '4',
    name: 'Stretch Demnim',
    price: '39.99',
    url: './assets/jeans.png'
  },
  {
    id: '5',
    name: 'Lovely Scarf',
    price: '14.99',
    url: './assets/scarf.png'
  },
  {
    id: '6',
    name: 'Knit Socks',
    price: '3.99',
    url: './assets/socks.png'
  },
  {
    id: '7',
    name: 'Fajitas Shoes',
    price: '73.00',
    url: './assets/shoes.png'
  }
];

@Injectable()
export class ProductService {

  // CHALLENGE: Return a product by Id
  getProductById(id: string) {

  }

  getRandomProduct() {
    // Generates random number between 1 and 7
    const index = Math.floor(Math.random() * 6) + 1;
    return PRODUCTS[index] || PRODUCTS[0];
  }

  // CHALLENGE: Only run this query when there's actually something to search for
  search(query: string): Product[] {
    return PRODUCTS.filter(p => p.name.startsWith(query));
  }
}
