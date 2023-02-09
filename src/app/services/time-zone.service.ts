import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {
  
  constructor(private http: HttpClient) { }

  getTimeZone(latitude: number, longitude: number): Observable<any> {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${environment.timezoneAPIKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
    return this.http.get(url);
  }
  
  getTimeZoneOffset() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

}
