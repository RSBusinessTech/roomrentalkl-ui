import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedRoomsComponent } from './components/featured-rooms/featured-rooms.component';

@NgModule({
  declarations: [
    FeaturedRoomsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeaturedRoomsComponent   // IMPORTANT
  ]
})
export class SharedModule {}