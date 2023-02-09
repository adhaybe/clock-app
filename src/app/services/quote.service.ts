import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<any> {
    return this.http.get(this.apiUrl); // retrieve random quotes from api
  }
}
