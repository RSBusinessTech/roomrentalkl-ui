import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input() faqs: any[] = [];
  @Input() area: any;

  showAll: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get displayedFaqs() {
    if (this.showAll) {
      return this.faqs;
    }
    return this.faqs.slice(0, 5);
  }

  toggleFaqs() {
    this.showAll = !this.showAll;
  }

}
