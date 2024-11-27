import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`);
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getEpisodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode`);
  }

  getEpisode(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }

  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  getLocation(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }
}