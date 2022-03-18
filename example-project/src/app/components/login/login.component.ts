import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = {
    password: '',
  };
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(this.username.password).subscribe((response) => {
      if (response) {
        this.router.navigate(['/weather']);
      }
    });
  }
}
