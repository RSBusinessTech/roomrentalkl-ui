import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AreasComponent } from './features/areas/areas.component';
import { ContactComponent } from './features/contact/contact.component';
import { RequestARoomComponent } from './features/request-a-room/request-a-room.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { PropertyTypeComponent } from './features/property-type/property-type.component';
import { NearTransitComponent } from './features/near-transit/near-transit.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: 'rooms-for-rent-kl', component: RoomsComponent,  data: { room: 'rooms-for-rent-kl' }},
  { path: 'master-room-rental-kl', component: RoomsComponent,  data: { room: 'master-room-rental-kl' }},
  { path: 'medium-room-rental-kl', component: RoomsComponent,  data: { room: 'medium-room-rental-kl' }},
  { path: 'single-room-rental-kl', component: RoomsComponent,  data: { room: 'single-room-rental-kl' }},
  { path: 'studio-room-rental-kl', component: RoomsComponent,  data: { room: 'studio-room-rental-kl' }},
  { path: 'cheap-rooms-kl', component: RoomsComponent,  data: { room: 'cheap-rooms-kl' }},
  { path: 'budget-rooms-kl', component: RoomsComponent,  data: { room: 'budget-rooms-kl' }},
  { path: 'shared-rooms-kl', component: RoomsComponent,  data: { room: 'shared-rooms-kl' }},
  { path: 'furnished-rooms-kl', component: RoomsComponent,  data: { room: 'furnished-rooms-kl' }},
  { path: 'semi-furnished-rooms-kl', component: RoomsComponent,  data: { room: 'semi-furnished-rooms-kl' }},
  { path: 'unfurnished-rooms-kl', component: RoomsComponent,  data: { room: 'unfurnished-rooms-kl' }},

  { path: 'condo-room-rental-kl', component: PropertyTypeComponent,  data: { property: 'condo-room-rental-kl' }},
  { path: 'apartment-room-rental-kl', component: PropertyTypeComponent,  data: { property: 'apartment-room-rental-kl' }},
  { path: 'landed-house-room-rental-kl', component: PropertyTypeComponent,  data: { property: 'landed-house-room-rental-kl' }},
  { path: 'co-living-kl', component: PropertyTypeComponent,  data: { property: 'co-living-kl' }},
  { path: 'service-residence-kl', component: PropertyTypeComponent,  data: { property: 'service-residence-kl' }},
  { path: 'soho-kl', component: PropertyTypeComponent,  data: { property: 'soho-kl' }},
  { path: 'serviced-apartment-kl', component: PropertyTypeComponent,  data: { property: 'serviced-apartment-kl' }},
  { path: 'studio-unit-kl', component: PropertyTypeComponent,  data: { property: 'studio-unit-kl' }},

  { path: 'room-near-mrt-kl', component: NearTransitComponent,  data: { transit: 'room-near-mrt-kl' }},
  { path: 'room-near-lrt-kl', component: NearTransitComponent,  data: { transit: 'room-near-lrt-kl' }},
  { path: 'room-near-monorail-kl', component: NearTransitComponent,  data: { transit: 'room-near-monorail-kl' }},
  { path: 'room-near-ktm-kl', component: NearTransitComponent,  data: { transit: 'room-near-ktm-kl' }},
  { path: 'room-near-kl-sentral', component: NearTransitComponent,  data: { transit: 'room-near-kl-sentral' }},
  { path: 'room-near-klcc-mrt', component: NearTransitComponent,  data: { transit: 'room-near-klcc-mrt' }},
  { path: 'room-near-bukit-bintang-mrt', component: NearTransitComponent,  data: { transit: 'room-near-bukit-bintang-mrt' }},
  { path: 'room-near-trx-mrt', component: NearTransitComponent,  data: { transit: 'room-near-trx-mrt' }},
  { path: 'room-near-muzium-negara', component: NearTransitComponent,  data: { transit: 'room-near-muzium-negara' }},
  { path: 'room-near-pasar-seni', component: NearTransitComponent,  data: { transit: 'room-near-pasar-seni' }},
  { path: 'room-near-ampang-park-mrt', component: NearTransitComponent,  data: { transit: 'room-near-ampang-park-mrt' }},

  { path: 'room-rental-klcc',component: AreasComponent,data: { area: 'klcc' }},
  { path: 'room-rental-bukit-bintang', component: AreasComponent,data: { area: 'bukit-bintang' }},
  { path: 'room-rental-mont-kiara', component: AreasComponent,data: { area: 'mont-kiara' }},
  { path: 'room-rental-bangsar', component: AreasComponent,data: { area: 'bangsar' }},
  { path: 'room-rental-cheras', component: AreasComponent,data: { area: 'cheras' }},
  { path: 'room-rental-ampang', component: AreasComponent, data: { area: 'ampang' }},
  { path: 'room-rental-bukit-jalil', component: AreasComponent,  data: { area: 'bukit-jalil' }},
  { path: 'room-rental-setapak',  component: AreasComponent,  data: { area: 'setapak' }},
  { path: 'room-rental-kepong', component: AreasComponent, data: { area: 'kepong' }},
  { path: 'room-rental-kl-sentral', component: AreasComponent, data: { area: 'kl-sentral' }},
  { path: 'room-rental-damansara', component: AreasComponent,  data: { area: 'damansara' }},
  { path: 'room-rental-bandar-utama', component: AreasComponent, data: { area: 'bandar-utama' }},
  { path: 'room-rental-pj', component: AreasComponent, data: { area: 'pj' }},
  { path: 'room-rental-sunway',  component: AreasComponent, data: { area: 'sunway' }},
  { path: 'room-rental-subang-jaya', component: AreasComponent, data: { area: 'subang-jaya' }},
  { path: 'room-rental-usj',  component: AreasComponent, data: { area: 'usj' }},
  { path: 'room-rental-brickfields', component: AreasComponent, data: { area: 'brickfields' }},
  { path: 'room-rental-pudu', component: AreasComponent, data: { area: 'pudu' }},
  { path: 'room-rental-chow-kit',  component: AreasComponent,  data: { area: 'chow-kit' }},
  { path: 'room-rental-seputeh',  component: AreasComponent, data: { area: 'seputeh' }},
  { path: 'room-rental-ttdi', component: AreasComponent,  data: { area: 'ttdi' }},
  { path: 'room-rental-cyberjaya', component: AreasComponent,  data: { area: 'cyberjaya' }},
  { path: 'room-rental-putrajaya', component: AreasComponent,  data: { area: 'putrajaya' }},
  { path: "contact", component: ContactComponent },
  { path: "request-a-room", component: RequestARoomComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',   // Every page will be opened from top instead of random position.
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
