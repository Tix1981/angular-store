import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './routing/app-router/app-router.module';
import { BuyersServiceService } from './services/buyers-service.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuyersComponentComponent } from './components/buyers-component/buyers-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyersComponentComponent,
    ProductsComponentComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [BuyersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
