import {Component, OnInit} from '@angular/core';
import {WeatherData} from "../../model/weather";
import {WeatherService} from "../../services/weather.service";
import {catchError, Observable, of} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public data: Observable<WeatherData | undefined> | undefined;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    //this.weatherService.fetchWeatherData().subscribe(weatherData => this.data = weatherData, error => console.error(error))
    this.data = this.weatherService.fetchWeatherData().pipe(catchError(err => {
      console.error(err);
      return of(undefined)
    }))
  }

}
