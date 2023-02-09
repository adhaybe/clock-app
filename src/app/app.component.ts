import { Component, OnInit } from '@angular/core';
import { ShowDetailService } from './services/show-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isActive: boolean = false;
  public isLoading: boolean = false;
  public timeOfDay: string = '';
  

  constructor(private showDetailService: ShowDetailService) {
    this.timeOfDay = this.getTimeOfDay();
  }

  ngOnInit() {
    this.showDetailService.buttonClicked$.subscribe(buttonClicked => {
      this.isActive = buttonClicked;
    });
  }

  getTimeOfDay() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'day' : 'night';
  }
  


}