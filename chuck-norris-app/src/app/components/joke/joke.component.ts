import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {JokeService} from "../../services/joke.service";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  public joke: string | undefined

  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
  }

  showJoke(): void {
    this.jokeService.getRandomJoke()
      .subscribe((joke: string) => this.joke = joke)
  }

}
