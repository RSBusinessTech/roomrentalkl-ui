import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { AreaService } from 'src/app/services/area.service';
import { AreasResponse } from 'src/app/models/areas-response';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areaSlug = '';
  pageData!: AreasResponse;
  loading = true;

  // Unified Filter Object
  filters = {
    area: '',
    roomType: 'All Room Types',
    propertyType: 'All Property Types',
    minPrice: null as number | null,
    maxPrice: null as number | null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private areaService: AreaService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.checkReveal();

    const area = this.route.snapshot.data['area'];

    this.areaService.getArea(area).subscribe(response => {
      this.pageData = response;

      // Angular 8 safe null check
      if (this.pageData && this.pageData.area) {
        this.filters.area = this.pageData.area.slug || '';
      }

      this.updateSeo();
      this.loading = false;
    });
  }

  // =========================
  // SCROLL ANIMATION
  // =========================
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

  // =========================
  // SEO
  // =========================
  updateSeo() {
    if (!this.pageData || !this.pageData.area) return;

    this.title.setTitle(this.pageData.area.metaTitle);

    this.meta.updateTag({
      name: 'description',
      content: this.pageData.area.metaDescription
    });
  }

  // =========================
  // SEARCH BUTTON
  // =========================
  searchRooms() {
    this.navigateToRooms();
  }

  // =========================
  // CATEGORY CLICK HANDLER
  // =========================
  onCategoryClick(roomType: string) {
    this.navigateToRooms({
      roomType: roomType
    });
  }

  // =========================
  // NAVIGATION CORE METHOD
  // =========================
  navigateToRooms(extra: any = {}) {

    const areaSlug =
      (this.pageData && this.pageData.area)
        ? this.pageData.area.slug
        : '';

    const queryParams = {
      area: areaSlug,
      roomType: this.filters.roomType,
      propertyType: this.filters.propertyType,
      minPrice: this.filters.minPrice,
      maxPrice: this.filters.maxPrice,
      ...extra
    };

    this.router.navigate(['/rooms'], { queryParams });
  }

  // =========================
// QUICK SEARCH HANDLER
// =========================
onQuickSearch(roomType: string) {
  // Update selected filter
  this.filters.roomType = roomType;

  // Optional: reset price filters for quick searches
  this.filters.minPrice = null;
  this.filters.maxPrice = null;

  // Navigate with updated filter
  this.navigateToRooms({
    roomType: roomType
  });
}
}