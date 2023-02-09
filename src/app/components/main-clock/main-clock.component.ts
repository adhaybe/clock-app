import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TimeZoneService } from 'src/app/services/time-zone.service';

@Component({
  selector: 'app-main-clock',
  templateUrl: './main-clock.component.html',
  styleUrls: ['../../styles/main-clock.component.scss']
})
export class MainClockComponent implements OnInit {
  public isLoading: boolean = true;
  public hasEnded: boolean = false;
  public greetingIcon: any;
  public greetingText: string = '';
  public currentTime: string = '';
  public timeZone = { abbreviation: 'BST'};

  constructor(private timeZoneService: TimeZoneService) {}

  ngOnInit(): void {
    this.toggleLoading();
    this.updateTimeOfDay();
    this.loadCurrentTime();
    this.getTimeZone();

  
    setInterval(() => {
      this.updateTimeOfDay();
      this.loadCurrentTime();
    }, 1000);
  }

  @HostListener('animationend', ['$event'])
  onAnimationEnd() {
    this.hasEnded = true;
  }

  updateTimeOfDay() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 18) {
      this.greetingIcon = '../../../assets/desktop/icon-sun.svg';
      this.greetingText = 'Good morning';
    } else {
      this.greetingIcon = '../../../assets/desktop/icon-moon.svg';
      this.greetingText = 'Good evening';
    }
  }

  getTimeZone() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.timeZoneService.getTimeZone(latitude, longitude).subscribe((timeZone: any) => {
          this.timeZone = timeZone;
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  loadCurrentTime() {
    this.currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }

  toggleLoading() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 2000);
  }
}
