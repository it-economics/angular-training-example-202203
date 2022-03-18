import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherRoutingModule} from './weather-routing.module';
import {WeatherComponent} from "./components/weather/weather.component";
import {DegreePipe} from "./pipes/degree.pipe";


@NgModule({
  declarations: [WeatherComponent,
    DegreePipe],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule {
}
