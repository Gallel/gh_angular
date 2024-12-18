import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/character?page=${page}`);
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getEpisodes(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/episode`).pipe(
      switchMap((data: any) => {
        const totalPages = data.info.pages;
        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(this.http.get(`${this.apiUrl}/episode?page=${i}`));
        }
        return forkJoin(requests);
      }),
      map((responses: any[]) => {
        return responses.flatMap(response => response.results);
      }),
      catchError(error => {
        console.error('Error fetching episodes:', error);
        return throwError(error);
      })
    );
  }
}