import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { HelloComponent } from './components/hello/hello.component';
import { WeatherComponent } from './weather/components/weather/weather.component';
import { MockComponents } from 'ng-mocks';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponents(
          NameInputComponent,
          HelloComponent,
          ReactiveFormComponent,
          TemplateDrivenFormComponent,
          WeatherComponent
        ),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
