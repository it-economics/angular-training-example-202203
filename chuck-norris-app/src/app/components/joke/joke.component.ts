import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  public joke: string | undefined

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  showJoke(): void {
    this.httpClient.get('http://api.icndb.com/jokes/random').pipe(
      map(response => response as ChuckNorrisApiResponse),
      map((response: ChuckNorrisApiResponse) => response.value.joke)
    ).subscribe((joke: string) => this.joke = joke)
  }

}

interface ChuckNorrisApiResponse {
  value: { id: number, joke: string }
}
