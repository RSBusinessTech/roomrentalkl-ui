import { Component, Input, OnInit } from '@angular/core';
import { MarketInsight } from 'src/app/models/marketInsight';

@Component({
  selector: 'app-market-insights',
  templateUrl: './market-insights.component.html',
  styleUrls: ['./market-insights.component.css']
})
export class MarketInsightsComponent implements OnInit {

   @Input() insights!: MarketInsight;
   @Input() area: any;
   
   get demandBadgeClass(): string {
   if (!this.insights || !this.insights.demandLevel) {
    return '';
  }

  switch (this.insights.demandLevel.toLowerCase()) {
    case 'high':
      return 'high';
    case 'medium':
      return 'medium';
    case 'low':
      return 'low';

    default:
      return '';
   }
 }
  constructor() { }

  ngOnInit() {
  }
}
