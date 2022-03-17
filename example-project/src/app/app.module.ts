import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { WeatherComponent } from './components/weather/weather.component';
import {HttpClientModule} from "@angular/common/http";
import { DegreePipe } from './pipes/degree.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NameInputComponent,
    WeatherComponent,
    DegreePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
