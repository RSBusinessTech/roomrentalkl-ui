import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef
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
  PropertySEO,
  PROPERTY_SEO
} from 'src/app/shared/data/property-seo';


import {
  AREAS
} from 'src/app/shared/data/areas';


import {
  RentalPropertiesService
} from 'src/app/services/rental-properties.service';


import {
  Room
} from 'src/app/models/room';



@Component({
  selector: 'app-property-type',

  templateUrl: './property-type.component.html',

  styleUrls: ['./property-type.component.css']
})


export class PropertyTypeComponent implements OnInit, OnDestroy {



  // =========================================
  // AREA DATA
  // =========================================

  areas = AREAS;



  // =========================================
  // SEARCH FILTERS
  // =========================================
  selectedLocation: string = '';

  minPrice: number | null = null;
  roomType: string = '';

  maxPrice: number | null = null;



  // =========================================
  // MOBILE VIEW
  // =========================================

  isMobile: boolean =
    window.innerWidth <= 768;



  @HostListener(
    'window:resize',
    ['$event']
  )

  onResize(event:any):void {

    this.isMobile =
      event.target.innerWidth <= 768;

  }




  // =========================================
  // SEO DATA
  // =========================================

  propertySEO!: PropertySEO;

  propertySlug!: string;




  // =========================================
  // PROPERTY LISTINGS
  // =========================================

  properties:any[] = [];

  loading:boolean = true;

  totalProperties:number = 0;

  totalLocations:number = 0;


  latestRooms:Room[] = [];
  featuredAreas = AREAS;

  @ViewChild('areasContainer', { static: false })
  areasContainer!: ElementRef;

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



  // =========================================
  // SUBSCRIPTION
  // =========================================

  private routeSubscription!: Subscription;




  // =========================================
  // CONSTRUCTOR
  // =========================================

  constructor(

    private route:ActivatedRoute,

    private router:Router,

    private titleService:Title,

    private metaService:Meta,

    private rentalPropertiesService:RentalPropertiesService


  ){}




  // =========================================
  // INIT
  // =========================================

  ngOnInit():void {
  this.propertySlug = this.route.snapshot.data['property'];
    this.loadPropertyPage();
      this.checkReveal();

    this.rentalPropertiesService

    .getRentalProperties(this.propertySlug)

    .subscribe({

      next:(response)=>{


        console.log(
          'Rental API:',
          response
        );



        this.latestRooms =
          response.latestRooms;



        this.totalProperties =
          this.latestRooms.length;



        this.loading=false;


      },


      error:(error)=>{


        console.error(
          'Unable to load rental properties',
          error
        );


        this.loading=false;


      }

    });


  }

  @HostListener('window:scroll')
onScroll(): void {
  this.checkReveal();
}

checkReveal(): void {

  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  elements.forEach((el: any) => {

    const position = el.getBoundingClientRect().top;

    if (position < windowHeight - 100) {
      el.classList.add('active');
    }

  });

}

showAllLocations = false;

get displayedLocations() {

  if (
    !this.propertySEO ||
    !this.propertySEO.popularLocations
  ) {
    return [];
  }

  return this.showAllLocations
    ? this.propertySEO.popularLocations
    : this.propertySEO.popularLocations.slice(0, 5);

}



  // =========================================
  // LOAD PROPERTY SEO
  // =========================================

  loadPropertyPage():void {


    this.propertySEO =
      PROPERTY_SEO[
        this.propertySlug
      ];



    if(!this.propertySEO){


      console.error(

        'Property SEO configuration not found:',
        this.propertySlug

      );


      this.loading=false;

      return;

    }



    this.updateSEO();


  }





  // =========================================
  // SEO META
  // =========================================

  updateSEO():void {



    this.titleService.setTitle(

      this.propertySEO.metaTitle

    );



    this.metaService.updateTag({

      name:'description',

      content:
        this.propertySEO.metaDescription

    });



    this.metaService.updateTag({

      name:'robots',

      content:
        this.propertySEO.robots

    });



    this.metaService.updateTag({

      property:'og:title',

      content:
        this.propertySEO.metaTitle

    });



    this.metaService.updateTag({

      property:'og:description',

      content:
        this.propertySEO.metaDescription

    });



    this.metaService.updateTag({

      property:'og:image',

      content:
        this.propertySEO.heroImage

    });



    this.metaService.updateTag({

      property:'og:url',

      content:
        this.propertySEO.canonicalUrl

    });


  }





  // =========================================
  // SEARCH
  // =========================================

  onSearch():void {


  const queryParams:any = {};


  // Keep selected property page
  if(this.propertySlug){

    queryParams.propertyType =
      this.propertySlug;

  }


  // Room Type
  if(this.roomType){

    queryParams.roomType =
      this.roomType;

  }


  // Area
  if(this.selectedLocation){

    queryParams.area =
      this.selectedLocation;

  }


  // Minimum Price
  if(this.minPrice !== null){

    queryParams.minPrice =
      this.minPrice;

  }


  // Maximum Price
  if(this.maxPrice !== null){

    queryParams.maxPrice =
      this.maxPrice;

  }



  this.router.navigate(

    ['/rooms'],

    {
      queryParams
    }

  );


}




  // =========================================
  // FAQ
  // =========================================

  openedFAQ:number = -1;

  showAllFAQs:boolean = false;



  toggleFAQ(index:number):void {


    if(this.openedFAQ === index){

      this.openedFAQ = -1;

    }

    else{

      this.openedFAQ = index;

    }

  }




  get displayedFAQs(){


    if(
      !this.propertySEO ||
      !this.propertySEO.faqs
    ){

      return [];

    }



    return this.showAllFAQs

      ? this.propertySEO.faqs

      : this.propertySEO.faqs.slice(0,5);


  }


  // =========================================
  // DESTROY
  // =========================================

  ngOnDestroy():void {


    if(this.routeSubscription){

      this.routeSubscription.unsubscribe();

    }


  }


}