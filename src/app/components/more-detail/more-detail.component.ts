import { Component, OnInit } from '@angular/core';
import { TimeZoneService } from 'src/app/services/time-zone.service';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['../../styles/more-detail.component.scss']
})
export class MoreDetailComponent implements OnInit {

  public timeZone = { zoneName: 'Europe/London' };
  public time = { dayOfWeek: 5, dayOfYear: 295, weekNumber: 42};

  constructor(private timeZoneService: TimeZoneService) { }

  ngOnInit(): void {
    this.getTimeZone();
    this.setTime();
  }

  getTimeZone() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.timeZoneService.getTimeZone(latitude, longitude).subscribe((timeZone: any) => {
          this.timeZone = timeZone;
          console.log(timeZone);
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }


  private setTime() {
    const date = new Date();
    this.time.dayOfWeek = date.getUTCDay();
    this.time.dayOfYear = date.getUTCDate();
    this.time.weekNumber = this.getWeekNumber(date);
  }
  
  private getWeekNumber(date: Date) {
    const startOfYear = new Date(date.getUTCFullYear(), 0, 1).getTime();
    const dateTime = date.getTime();
    const dayOfYear = ((dateTime - startOfYear) / 86400000) + new Date(startOfYear).getUTCDay();
    return Math.ceil(dayOfYear / 7);
  }
  
  

}
