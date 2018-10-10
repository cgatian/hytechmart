import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatBadgeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

// Services
import { CartService } from './_additional/cart.service';
import { ProductService } from './_additional/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductSearchComponent,
    FooterComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatBadgeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CartService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
