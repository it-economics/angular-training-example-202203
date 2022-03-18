import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import {HttpClientModule} from "@angular/common/http";
import { QuotationMarkPipe } from './pipes/quotation-mark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    QuotationMarkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
