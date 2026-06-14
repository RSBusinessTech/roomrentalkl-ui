import { Component, Input, OnInit } from '@angular/core';
import { PriceGuide } from 'src/app/models/priceGuide';

@Component({
  selector: 'app-rental-price-guide',
  templateUrl: './rental-price-guide.component.html',
  styleUrls: ['./rental-price-guide.component.css']
})
export class RentalPriceGuideComponent implements OnInit {
  
  @Input() pricing: PriceGuide[] = [];
  @Input() area: any;

  trackByRoomType(
    index: number,
    item: PriceGuide
  ): string {
    return item.roomType;
  }

  constructor() { }

  ngOnInit() {
  }

}
