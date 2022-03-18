import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  getRandomJoke():Observable<string>{
    return this.httpClient.get('http://api.icndb.com/jokes/random').pipe(
      map(response => response as ChuckNorrisApiResponse),
      map((response: ChuckNorrisApiResponse) => response.value.joke)
    )
  }
}
export interface ChuckNorrisApiResponse {
  value: { id: number, joke: string }
}
