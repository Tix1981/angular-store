import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BuyersComponentComponent } from '../../components/buyers-component/buyers-component.component';
import { CheckLatestPurchasesComponent } from '../../components/check-latest-purchases/check-latest-purchases.component';
import { ProductsComponentComponent } from '../../components/products-component/products-component.component';

const appRoutes:Routes = [
  { path: 'buyers', component: BuyersComponentComponent },
  { path: 'buyers/:name', component: CheckLatestPurchasesComponent },
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
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
