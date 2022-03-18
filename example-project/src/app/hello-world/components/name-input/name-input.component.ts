import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {
  value: string = "";

  @Output() submitted: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(event: KeyboardEvent) {
    this.value = (event.target as HTMLInputElement).value;
    console.log(this.value);
    // this.submitted.emit(this.value);
  }

  onEnter() {
    this.submitted.emit(this.value)
  }
}
