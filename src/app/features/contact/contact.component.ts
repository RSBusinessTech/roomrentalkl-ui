import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    this.checkReveal();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkReveal();
  }

  checkReveal() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach((el: any) => {
      const position = el.getBoundingClientRect().top;

      if (position < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

openIndex: number = -1;

showAllFaqs = false;
toggleFaq(index: number): void {
  this.openIndex =
    this.openIndex === index
      ? -1
      : index;
}

toggleMoreFaqs(): void {
  this.showAllFaqs = !this.showAllFaqs;
  // Optional:
  // Close any opened hidden FAQ when collapsing.
  if (!this.showAllFaqs && this.openIndex > 9) {
    this.openIndex = -1;
  }
 }
}
