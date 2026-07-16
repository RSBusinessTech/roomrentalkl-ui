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
}
