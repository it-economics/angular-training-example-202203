import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherComponent} from './weather.component';
import {WeatherService} from "../../services/weather.service";
import {of, throwError} from "rxjs";
import {By} from "@angular/platform-browser";
import { MockPipe } from "ng-mocks";
import { DegreePipe } from "../../pipes/degree.pipe";

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherServiceMock: { fetchWeatherData: jest.Mock }
  let expectedWeatherData = {temp: 3, temp_min: 0, temp_max: 7}

  beforeEach(async () => {
    weatherServiceMock = {fetchWeatherData: jest.fn()}
    weatherServiceMock.fetchWeatherData.mockReturnValue(of(expectedWeatherData))
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent, MockPipe(DegreePipe, (value) => `${value}`)],
      providers: [
        {provide: WeatherService, useValue: weatherServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has weather data observable', (done) => {
    component.data?.subscribe(weatherData => {
      expect(weatherData).toEqual(expectedWeatherData)
      done();
    })
  })

  it('returns undefined on error',(done)=>{
    weatherServiceMock.fetchWeatherData.mockReturnValue(throwError('someError'))
    component.ngOnInit()
    component.data?.subscribe(weatherData => {
      expect(weatherData).toBeUndefined()
      done();
    })
  })

  it('shows weather data',()=>{
    const tempParagraphTag: HTMLElement = fixture.debugElement.query(By.css('#temp')).nativeElement
    expect(tempParagraphTag.textContent).toEqual(`Aktuelle Temperatur: ${expectedWeatherData.temp}`)
  })
});
