import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { AreasComponent } from './features/areas/areas.component';
import { NearTransitComponent } from './features/near-transit/near-transit.component';
import { PropertyTypeComponent } from './features/property-type/property-type.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroSearchComponent } from './shared/components/hero-search/hero-search.component';
import { RoomFiltersComponent } from './shared/components/room-filters/room-filters.component';
import { LatestRoomsComponent } from './shared/components/latest-rooms/latest-rooms.component';
import { MrtStationsComponent } from './shared/components/mrt-stations/mrt-stations.component';
import { RentalPriceGuideComponent } from './shared/components/rental-price-guide/rental-price-guide.component';
import { MarketInsightsComponent } from './shared/components/market-insights/market-insights.component';
import { CompareAreasComponent } from './shared/components/compare-areas/compare-areas.component';
import { PopularSearchesComponent } from './shared/components/popular-searches/popular-searches.component';
import { RecentlyRentedComponent } from './shared/components/recently-rented/recently-rented.component';
import { RoomRequestsComponent } from './shared/components/room-requests/room-requests.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RoomCardComponent } from './shared/components/room-card/room-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FeaturedRoomsComponent } from './shared/components/featured-rooms/featured-rooms.component';
import { AreaGuideComponent } from './shared/components/area-guide/area-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AreasComponent,
    FeaturedRoomsComponent,
    NearTransitComponent,
    PropertyTypeComponent,
    RoomsComponent,
    HeroSearchComponent,
    RoomFiltersComponent,
    LatestRoomsComponent,
    AreaGuideComponent,
    MrtStationsComponent,
    RentalPriceGuideComponent,
    MarketInsightsComponent,
    CompareAreasComponent,
    PopularSearchesComponent,
    RecentlyRentedComponent,
    RoomRequestsComponent,
    FaqComponent,
    SidebarComponent,
    RoomCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
