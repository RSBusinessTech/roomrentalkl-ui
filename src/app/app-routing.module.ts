import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AreasComponent } from './features/areas/areas.component';
import { ContactComponent } from './features/contact/contact.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
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
  { path: "contact", component: ContactComponent }
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
