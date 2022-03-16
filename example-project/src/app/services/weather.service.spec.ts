import {TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {HttpClient} from "@angular/common/http";
import {WeatherData} from "../model/weather";
import {delay, of} from "rxjs";

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientMock: { get: jest.Mock };

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn()
    }
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientMock}
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch weather data calls correct url', (testFinished) => {
    let expectedWeatherData: WeatherData = {temp: 4, temp_min: 1, temp_max: 7};
    httpClientMock.get.mockReturnValue(of({main: expectedWeatherData}).pipe(delay(1000)))
    service.fetchWeatherData().subscribe(response => {
      expect(response).toEqual(expectedWeatherData);
      expect(httpClientMock.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c');
      testFinished();
    })
  })
});
