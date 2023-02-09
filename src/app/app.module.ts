import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { MoreDetailComponent } from './components/more-detail/more-detail.component';
import { MainClockComponent } from './components/main-clock/main-clock.component';
import { LocationComponent } from './components/location/location.component';
import { OverlayComponent } from './components/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreButtonComponent,
    QuotesComponent,
    MoreDetailComponent,
    MainClockComponent,
    LocationComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
