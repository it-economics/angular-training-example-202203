import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MockComponent} from "ng-mocks";
import {JokeComponent} from "./components/joke/joke.component";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, MockComponent(JokeComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('displays the joke component', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const jokeTag = fixture.debugElement.query(By.directive(JokeComponent))
    expect(jokeTag).toBeDefined();
  })


});
