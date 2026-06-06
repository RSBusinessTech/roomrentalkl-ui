import { Component,  HostListener,  OnInit, ViewChild, ElementRef} from '@angular/core';
import { AREAS } from '../shared/data/areas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredAreas = AREAS;

  @ViewChild('areasContainer', { static: false })
  areasContainer!: ElementRef;

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

  scrollAreas(direction: string) {

  const container = this.areasContainer.nativeElement;

  const scrollAmount = 280;

  if (direction === 'right') {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  } else {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
    }
  }
}