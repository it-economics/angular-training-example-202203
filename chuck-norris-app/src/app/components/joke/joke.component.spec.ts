import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JokeComponent} from './joke.component';
import {JokeService} from "../../services/joke.service";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";
import {MockPipe} from "ng-mocks";
import {QuotationMarkPipe} from "../../pipes/quotation-mark.pipe";

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let jokeServiceMock;

  beforeEach(async () => {
    jokeServiceMock = {getRandomJoke: () => of('expectedJoke')}
    await TestBed.configureTestingModule({
      providers: [
        {provide: JokeService, useValue: jokeServiceMock}
      ],
      declarations: [JokeComponent, MockPipe(QuotationMarkPipe, (value) => value+'_mocked')]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls service on button click', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    const paragraphWithJoke = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement
    expect(paragraphWithJoke.textContent).toEqual('expectedJoke_mocked');
  })
});
