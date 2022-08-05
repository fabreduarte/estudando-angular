import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public findAll(): Observable<Film[]> {
    return this.http.get<Film[]>("http://localhost:3000/films");
    
  }
}
