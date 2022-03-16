import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HelloComponent} from './hello.component';
import {By} from "@angular/platform-browser";

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows hello world', () => {
    const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement
    expect(h1Element.textContent).toEqual('Hello World\n!!')
  })
  it('shows name from input', () => {
    component.name = 'Max Mustermann';
    fixture.detectChanges();
    const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement
    expect(h1Element.textContent).toEqual('Hello Max Mustermann\n!!')
  })
});
