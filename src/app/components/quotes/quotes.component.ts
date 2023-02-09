import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { ShowDetailService } from 'src/app/services/show-detail.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['../../styles/quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public spinning: boolean = false;
  public isActive: boolean = false;
  public quote = { content: 'Be the change you wish to see in the world', author: 'Mahatma Gandhi'};
  

  constructor(private hideQuote: ShowDetailService, private quoteService: QuoteService) { }

  refresh() {
    this.spinning = true;
    // call the API to refresh the data
    this.quoteService.getRandomQuote().subscribe(data => {
      this.quote = data;
      this.spinning = false;
    });
  }

  ngOnInit(): void {
    this.hideQuote.buttonClicked$.subscribe(buttonClicked => {
      this.isActive = buttonClicked;
    });

    this.refresh();
    
    setInterval(() => {
      this.refresh();
    }, 15000);
  }

}
