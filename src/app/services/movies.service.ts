import { Movie } from './../interfaces/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/movies');
  }
  save(movie: Movie) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post( this.API_ENDPOINT + '/movies', movie, {headers});
  }
  put(movie) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put( this.API_ENDPOINT + '/movies/' + movie.id, movie, {headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/movies/' + id);
  }
}
