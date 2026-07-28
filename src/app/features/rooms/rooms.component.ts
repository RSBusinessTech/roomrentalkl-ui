import {
  Component,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  Title,
  Meta
} from '@angular/platform-browser';

import {
  Subscription
} from 'rxjs';

import {
  RoomSEO,
  ROOM_SEO
} from 'src/app/shared/data/room-seo';

import {
  AREAS
} from 'src/app/shared/data/areas';
import { RentalPropertiesService } from 'src/app/services/rental-properties.service';
import { Room } from 'src/app/models/room';


@Component({
  selector: 'app-rooms',

  templateUrl: './rooms.component.html',

  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  // =========================================
  // AREA DATA
  // =========================================
  areas = AREAS;

  // =========================================
  // SEARCH FILTERS
  // =========================================
  propertyType: string = '';
  selectedLocation: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  // =========================================
  // MOBILE VIEW
  // =========================================
  isMobile: boolean = window.innerWidth <= 768;

  // =========================================
  // RESPONSIVE HERO IMAGE
  // =========================================
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = event.target.innerWidth <= 768;
  }
  
  // =========================================
  // SEO DATA
  // =========================================
  roomSEO!: RoomSEO;
  roomSlug!: string;

  // =========================================
  // PROPERTY DATA
  // =========================================
  properties: any[] = [];
  loading: boolean = true;
  totalRooms: number = 0;
  totalLocations: number = 0;
  latestRooms: Room[] = [];
  
  // =========================================
  // SUBSCRIPTIONS
  // =========================================
  private routeSubscription!: Subscription;

  // =========================================
  // CONSTRUCTOR
  // =========================================
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private rentalPropertiesService: RentalPropertiesService

  ) {}

  // =========================================
  // INIT
  // =========================================
  ngOnInit(): void {
    this.roomSlug = this.route.snapshot.data['room'];
    this.loadRoomPage();
    this.rentalPropertiesService
    .getRentalProperties(this.roomSlug)
    .subscribe({
    next: (response) => {
    console.log('Rental API:', response);
    this.latestRooms = response.latestRooms;
    console.log(
    'Rooms count:',
    this.latestRooms.length
    );
     this.loading = false;
   },
    error: (error) => {
     console.error(
        'Unable to load rental properties',
        error
      );
      this.loading = false;
    }
  });
 }

  // =========================================
  // LOAD ROOM SEO PAGE
  // =========================================
  loadRoomPage(): void {
    // Get static SEO configuration
    this.roomSEO =
      ROOM_SEO[this.roomSlug];
    // Safety check
    if (!this.roomSEO) {
      console.error(
        'Room SEO configuration not found:',
        this.roomSlug
      );
      this.loading = false;
      return;
    }
    // Update SEO metadata
    this.updateSEO();

    // Load dynamic listings
    // this.loadProperties();
  }

  // =========================================
  // SEO
  // =========================================
  updateSEO(): void {
    // Browser title
    this.titleService.setTitle(
      this.roomSEO.metaTitle
    );
	
    // Meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        this.roomSEO.metaDescription
    });

    // Robots
    this.metaService.updateTag({
      name: 'robots',
      content:
        this.roomSEO.robots
    });

    // Open Graph title
    this.metaService.updateTag({
      property: 'og:title',
      content:
        this.roomSEO.metaTitle
    });

    // Open Graph description
    this.metaService.updateTag({
      property: 'og:description',
      content:
        this.roomSEO.metaDescription
    });

    // Open Graph image
    this.metaService.updateTag({
      property: 'og:image',
      content:
        this.roomSEO.heroImage
    });

    // Open Graph URL
    this.metaService.updateTag({
      property: 'og:url',
      content:
        this.roomSEO.canonicalUrl
    });
  }

  // =========================================
  // SEARCH ROOMS
  // =========================================

  onSearch(): void {
    const queryParams: any = {};
    // =====================================
    // PROPERTY TYPE
    // =====================================
    if (this.propertyType) {
      queryParams.propertyType =
        this.propertyType;
    }

    // =====================================
    // AREA
    // =====================================
    if (this.selectedLocation) {
      queryParams.area =
        this.selectedLocation;
    }

    // =====================================
    // MIN PRICE
    // =====================================
    if (
      this.minPrice !== null &&
      this.minPrice !== undefined
    ) {
      queryParams.minPrice =
        this.minPrice;
    }

    // =====================================
    // MAX PRICE
    // =====================================
    if (
      this.maxPrice !== null &&
      this.maxPrice !== undefined
    ) {
      queryParams.maxPrice =
        this.maxPrice;
    }

    // =====================================
    // ROOM TYPE
    // =====================================
	
    // Keep the current SEO room type
    // when searching from a room-specific page.
    if (this.roomSlug) {
      queryParams.roomType =
        this.roomSlug;
    }

    // =====================================
    // NAVIGATE
    // =====================================
    this.router.navigate(
      ['/rooms'],
      {
        queryParams: queryParams
      }
    );
  }

  // =========================================
  // DESTROY
  // =========================================
  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
  
  // =========================================
  // FAQ SECTION
  // =========================================  
  openedFAQ = -1;
  showAllFAQs: boolean = false;
  toggleFAQ(index: number): void {
    if (this.openedFAQ === index) {
      this.openedFAQ = -1;
    } else {
      this.openedFAQ = index;
    }
  }
  
  get displayedFAQs() {
    if (!this.roomSEO || !this.roomSEO.faqs) {
      return [];
    }
    return this.showAllFAQs
      ? this.roomSEO.faqs
      : this.roomSEO.faqs.slice(0, 5);
  }
  
}