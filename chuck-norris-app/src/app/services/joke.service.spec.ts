import {TestBed} from '@angular/core/testing';

import {ChuckNorrisApiResponse, JokeService} from './joke.service';
import {HttpClient} from "@angular/common/http";
import {delay, of} from "rxjs";

describe('JokeService', () => {
  let service: JokeService;
  let httpMock: { get: jest.Mock };

  beforeEach(() => {
    httpMock = {get: jest.fn()}
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpMock}
      ]
    });
    service = TestBed.inject(JokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRandomJoke returns joke from API', (done) => {
    let expectedJoke = 'expectedJoke';

    httpMock.get.mockImplementation((url: string) => {
      expect(url).toEqual('http://api.icndb.com/jokes/random');
      return of({value: {id: 42, joke: expectedJoke}} as ChuckNorrisApiResponse).pipe(delay(100))
    })

    service.getRandomJoke().subscribe(joke => {
      expect(joke).toEqual(expectedJoke);
      done();
    })
  })
});
