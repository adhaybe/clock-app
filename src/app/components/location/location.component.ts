import { Component, Input, OnInit } from '@angular/core';
import { TimeZoneService } from 'src/app/services/time-zone.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['../../styles/location.component.scss']
})
export class LocationComponent implements OnInit {

  public location = { cityName: 'London' };

  constructor(private timeZoneService: TimeZoneService) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.timeZoneService.getTimeZone(latitude, longitude).subscribe((data: any) => {
          this.location = data;
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

}
