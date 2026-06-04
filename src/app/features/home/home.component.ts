import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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