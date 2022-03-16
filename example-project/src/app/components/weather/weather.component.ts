import {Component, OnInit} from '@angular/core';
import {WeatherData} from "../../model/weather";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public data: WeatherData | undefined;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    let observable: Observable<any> = this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c');
    observable.pipe(
      tap(dataFromServer => console.log(dataFromServer)),
      map(dataFromServer => dataFromServer.main as WeatherData),
      tap(weatherData => console.log(weatherData)),
    ).subscribe(weatherData => this.data = weatherData)
  }

}
