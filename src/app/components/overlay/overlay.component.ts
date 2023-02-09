import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['../../styles/overlay.component.scss']
})

export class OverlayComponent implements OnInit {
  isLoading = true;
  hasEnded = false;

  @HostListener('animationend', ['$event'])
  onAnimationEnd(event: AnimationEvent) {
    this.hasEnded = true;
  }

  toggleLoading() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 2000);
  }

  constructor() {}

  ngOnInit(): void {
      this.toggleLoading();
  }
}





