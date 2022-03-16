import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  public buttonClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  showJoke(): void {
    this.buttonClicked = true;
  }

}
