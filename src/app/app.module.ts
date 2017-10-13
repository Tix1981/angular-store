import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './routing/app-router/app-router.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
