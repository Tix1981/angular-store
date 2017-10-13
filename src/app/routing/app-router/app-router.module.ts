import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BuyersComponentComponent } from '../../components/buyers-component/buyers-component.component';
import { ProductsComponentComponent } from '../../components/products-component/products-component.component';
import { LayoutComponent } from '../../components/layout/layout.component';

const appRoutes:Routes = [
  { path: 'buyers', component: BuyersComponentComponent },
  { path: 'products', component: ProductsComponentComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    BuyersComponentComponent,
    ProductsComponentComponent,
    LayoutComponent
  ],
  exports:[
    LayoutComponent
  ]
})
export class AppRouterModule { }
