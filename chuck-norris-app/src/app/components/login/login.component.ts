import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError?: string;

  constructor(formBuilder: FormBuilder, private authenticatioService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group({
      userName: formBuilder.control('', [Validators.required]),
      password: formBuilder.control('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.authenticatioService.login(this.loginForm.controls['userName'].value, this.loginForm.controls['password'].value).subscribe(loginSuccessful => {
        if (loginSuccessful) {
          this.router.navigate(['/'])
        } else {
          this.loginError = 'Falsche Zugangsdaten'
        }
      })

    }
  }
}
