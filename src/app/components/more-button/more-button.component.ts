import { Component, HostListener } from '@angular/core';
import { ShowDetailService } from 'src/app/services/show-detail.service';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['../../styles/more-button.component.scss']
})
export class MoreButtonComponent {
  isActive: boolean = true;
  buttonText: string = 'More';
  isLoading: boolean= true;
  hasEnded: boolean = false;

  constructor(private showDetailService: ShowDetailService) {}

  showMoreDetails() {
    this.isActive = !this.isActive; // toggle image state
    this.buttonText = this.buttonText === 'More' ? 'Less' : 'More'; // toggle button text
    this.showDetailService.toggleButton(!this.isActive);
  }

  toggleLoading() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 2000);
  }

  @HostListener('animationend', ['$event'])
  onAnimationEnd(event: AnimationEvent) {
    this.hasEnded = true;
  }

  ngOnInit(): void {
      this.toggleLoading();
  }
}

