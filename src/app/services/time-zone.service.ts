import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {
  
  private API_KEY = '7PII7ID7JEYG';

  constructor(private http: HttpClient) { }

  getTimeZone(latitude: number, longitude: number): Observable<any> {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${this.API_KEY}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
    return this.http.get(url);
  }



  getTimeZoneOffset() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

}
