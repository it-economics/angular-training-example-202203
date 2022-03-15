import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = "Max";
  // username: string[] = [ "Alex", "Max" ];

  showHelloComponent: boolean = false;

  sayHello() {
    console.log("sayHello");
    this.showHelloComponent = !this.showHelloComponent;
  }

  changeName(event: string) {
    this.username = event;
  }
}
