import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MockComponents} from "ng-mocks";
import {JokeComponent} from "./components/joke/joke.component";
import {By} from "@angular/platform-browser";
import {LoginComponent} from "./components/login/login.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, MockComponents(JokeComponent,LoginComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('displays the joke component after successful login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges()
    const loginForm = fixture.debugElement.query(By.directive(LoginComponent)).componentInstance as LoginComponent
    loginForm.loginSuccessful.next();
    fixture.detectChanges()
    const jokeTag = fixture.debugElement.query(By.directive(JokeComponent))
    expect(jokeTag).toBeDefined();
  })


});
