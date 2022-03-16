import {TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';
import {HttpClient} from "@angular/common/http";
import {WeatherData} from "../model/weather";
import {delay, of} from "rxjs";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherService);
    httpClientMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpClientMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch weather data calls correct url', (testFinished) => {
    let expectedWeatherData: WeatherData = {temp: 4, temp_min: 1, temp_max: 7};

    service.fetchWeatherData().subscribe(response => {
      expect(response).toEqual(expectedWeatherData);
      testFinished();
    })

    const req = httpClientMock.expectOne(
      'https://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c',
    )
    req.flush({main:expectedWeatherData})
  })
});
