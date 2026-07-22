import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  ActivatedRoute,
  NavigationEnd,
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
  filter
} from 'rxjs/operators';
import { RoomSEO, ROOM_SEO } from 'src/app/shared/data/room-seo';
import { AREAS } from 'src/app/shared/data/areas';


@Component({
  selector: 'app-rooms',

  templateUrl: './rooms.component.html',

  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {

  areas = AREAS;
  propertyType: string = '';
  selectedLocation: string = '';


  // SEO data from room-seo.ts
  roomSEO!: RoomSEO;

  // Current room slug
  roomSlug!: string;

  // Dynamic listings from REST API
  properties: any[] = [];

  // Loading state
  loading: boolean = true;

  // API statistics
  totalRooms: number = 0;

  totalLocations: number = 0;


  // Search
  searchKeyword: string = '';

  selectedLocation: string = '';

  minPrice!: number;
  maxPrice!: number;

  furnishing: string = '';


  // Subscriptions
  private routeSubscription!: Subscription;

  private routerSubscription!: Subscription;


  constructor(
    private route: ActivatedRoute,

    private router: Router,

    private titleService: Title,

    private metaService: Meta,

    // private propertyService: PropertyService
  ) {}


  ngOnInit(): void {

    this.routeSubscription =
      this.route.data.subscribe(data => {

        this.roomSlug = data['room'];

        this.loadRoomPage();

      });

  }


  loadRoomPage(): void {

    // Get static SEO configuration
    this.roomSEO = ROOM_SEO[this.roomSlug];


    // Safety check
    if (!this.roomSEO) {

      console.error(
        'Room SEO configuration not found:',
        this.roomSlug
      );

      return;

    }


    // Update SEO
    this.updateSEO();


    // Load dynamic listings
    // this.loadProperties();

  }


  updateSEO(): void {

    // Browser title
    this.titleService.setTitle(
      this.roomSEO.metaTitle
    );


    // Meta description
    this.metaService.updateTag(
      {
        name: 'description',
        content: this.roomSEO.metaDescription
      }
    );


    // Robots
    this.metaService.updateTag(
      {
        name: 'robots',
        content: this.roomSEO.robots
      }
    );


    // Open Graph title
    this.metaService.updateTag(
      {
        property: 'og:title',
        content: this.roomSEO.metaTitle
      }
    );


    // Open Graph description
    this.metaService.updateTag(
      {
        property: 'og:description',
        content: this.roomSEO.metaDescription
      }
    );


    // Open Graph image
    this.metaService.updateTag(
      {
        property: 'og:image',
        content: this.roomSEO.heroImage
      }
    );


    // Open Graph URL
    this.metaService.updateTag(
      {
        property: 'og:url',
        content: this.roomSEO.canonicalUrl
      }
    );

  }


  // loadProperties(): void {

  //   this.loading = true;


  //   this.propertyService
  //     .getPropertiesByRoomType(this.roomSlug)
  //     .subscribe(

  //       (response: any) => {

  //         this.loading = false;


  //         if (response) {

  //           this.properties =
  //             response.properties || [];


  //           this.totalRooms =
  //             response.totalRooms ||
  //             this.properties.length;


  //           this.totalLocations =
  //             response.totalLocations ||
  //             0;

  //         }

  //       },


  //       error => {

  //         this.loading = false;

  //         console.error(
  //           'Unable to load room listings',
  //           error
  //         );

  //       }

  //     );

  // }


  onSearch(): void {

    console.log(
      'Search:',
      this.searchKeyword
    );

    // You can connect this with
    // your REST API filter endpoint later.

  }


  ngOnDestroy(): void {

    if (this.routeSubscription) {

      this.routeSubscription.unsubscribe();

    }

    if (this.routerSubscription) {

      this.routerSubscription.unsubscribe();

    }

  }

}