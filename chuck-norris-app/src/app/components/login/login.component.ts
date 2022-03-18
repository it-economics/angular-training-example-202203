import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @Output()
  loginSuccessful: EventEmitter<void> = new EventEmitter<void>()

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userName: formBuilder.control('',[Validators.required]),
      password: formBuilder.control('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.valid){
      if(this.loginForm.controls['password'].value === 'secret'){
        this.loginSuccessful.next();
      }
    }
  }
}
