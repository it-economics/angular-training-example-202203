import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userIsLoggedIn: boolean = false;

  showJokeComponent() {
    this.userIsLoggedIn = true;
  }
}
