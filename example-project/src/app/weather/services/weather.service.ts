import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherData } from '../model/weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  fetchWeatherData(): Observable<WeatherData> {
    let observable: Observable<any> = this.httpClient.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric'
    );
    return observable.pipe(
      map((dataFromServer) => dataFromServer.main as WeatherData)
    );
  }
}
