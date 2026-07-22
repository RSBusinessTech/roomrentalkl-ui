import {
  Component,
  OnInit,
  OnDestroy
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

    private metaService: Meta

    // private propertyService: PropertyService

  ) {}


  // =========================================
  // INIT
  // =========================================

  ngOnInit(): void {

    this.routeSubscription =
      this.route.data.subscribe(data => {

        this.roomSlug = data['room'];

        this.loadRoomPage();

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
  // LOAD PROPERTIES
  // =========================================

  /*
  loadProperties(): void {

    this.loading = true;


    this.propertyService
      .getPropertiesByRoomType(this.roomSlug)
      .subscribe(

        (response: any) => {

          this.loading = false;


          if (response) {

            this.properties =
              response.properties || [];


            this.totalRooms =
              response.totalRooms ||
              this.properties.length;


            this.totalLocations =
              response.totalLocations ||
              0;

          }

        },


        error => {

          this.loading = false;

          console.error(
            'Unable to load room listings',
            error
          );

        }

      );

  }
  */


  // =========================================
  // DESTROY
  // =========================================

  ngOnDestroy(): void {

    if (this.routeSubscription) {

      this.routeSubscription.unsubscribe();

    }

  }

}