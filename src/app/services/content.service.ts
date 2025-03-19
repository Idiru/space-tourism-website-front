import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:8080/api/content'; 

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets`);
  }
}
