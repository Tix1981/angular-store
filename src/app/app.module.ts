import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './routing/app-router/app-router.module';
import { BuyersServiceService } from './services/buyers-service.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [BuyersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
