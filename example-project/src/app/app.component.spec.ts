import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NameInputComponent} from "./components/name-input/name-input.component";
import {HelloComponent} from "./components/hello/hello.component";
import {WeatherComponent} from "./components/weather/weather.component";
import {MockComponents} from "ng-mocks";


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(NameInputComponent,
          HelloComponent,
          WeatherComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
