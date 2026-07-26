import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-rental-properties',
  templateUrl: './rental-properties.component.html',
  styleUrls: ['./rental-properties.component.css']
})
export class RentalPropertiesComponent {

  @Input() rooms: any[] = [];
  @Input() roomSlug: string = '';

  showGallery = false;
  galleryImages: string[] = [];
  galleryIndex = 0;
  selectedImage = '';

  constructor(
    private router: Router
  ) {}


  // =========================
  // ROOM DETAILS
  // =========================
  // openRoom(slug: string) {
  //   this.router.navigate(['/room', slug]);
  // }

  openRoom() {
  this.router.navigate(['/rooms-for-rent-kl']);
}



  // =========================
  // WHATSAPP
  // =========================
  whatsapp(room: Room, event: Event) {

    event.stopPropagation();

    const phone = '601114278964';

    const msg =
      `Hi, I am interested in ${room.title}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  }


  // =========================
  // CALL
  // =========================
  call(room: Room, event: Event) {

    event.stopPropagation();

    window.location.href =
      `tel:601114278964`;

  }


  // =========================
  // SHARE
  // =========================
  share(room: Room, event: Event) {

    event.stopPropagation();

    const url =
      window.location.origin +
      '/room/' +
      room.slug;


    if ((navigator as any).share) {

      (navigator as any).share({
        title: room.title,
        url
      });

    } else {

      const dummy =
        document.createElement('input');

      document.body.appendChild(dummy);

      dummy.value = url;

      dummy.select();

      document.execCommand('copy');

      document.body.removeChild(dummy);

      alert('Link copied');

    }
  }



  // =========================
  // IMAGE SLIDER
  // =========================

  nextImage(room: Room, event: Event) {

    event.stopPropagation();

    if (!room.images || room.images.length <= 1) {
      return;
    }


    room.currentImageIndex =
      ((room.currentImageIndex || 0) + 1)
      % room.images.length;

  }


  prevImage(room: Room, event: Event) {

    event.stopPropagation();

    if (!room.images || room.images.length <= 1) {
      return;
    }


    room.currentImageIndex =
      ((room.currentImageIndex || 0) - 1 +
      room.images.length)
      % room.images.length;

  }



  getCurrentImage(room: Room): string {

    if (!room.images || !room.images.length) {
      return room.thumbnail;
    }


    return room.images[
      room.currentImageIndex || 0
    ];

  }



  // =========================
  // GALLERY
  // =========================

  openGallery(room: Room, event: Event) {

    event.stopPropagation();

    this.galleryImages =
      room.images || [];

    this.galleryIndex =
      room.currentImageIndex || 0;

    this.selectedImage =
      this.galleryImages[this.galleryIndex];

    this.showGallery = true;

  }


  closeGallery() {

    this.showGallery = false;

  }


  galleryNext(event: Event) {

    event.stopPropagation();


    this.galleryIndex =
      (this.galleryIndex + 1)
      % this.galleryImages.length;


    this.selectedImage =
      this.galleryImages[this.galleryIndex];

  }



  galleryPrev(event: Event) {

    event.stopPropagation();


    this.galleryIndex =
      (
        this.galleryIndex - 1 +
        this.galleryImages.length
      )
      %
      this.galleryImages.length;


    this.selectedImage =
      this.galleryImages[this.galleryIndex];

  }



  selectGalleryImage(index:number) {

    this.galleryIndex = index;

    this.selectedImage =
      this.galleryImages[index];

  }



  getDaysAgo(dateString:string):number {

    const listedDate =
      new Date(dateString);

    const today =
      new Date();


    const diffTime =
      today.getTime() -
      listedDate.getTime();


    return Math.floor(
      diffTime /
      (1000 * 60 * 60 * 24)
    );

  }

}