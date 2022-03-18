import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user);
  }

  onClick() {
    console.log('onClick');
  }
}
