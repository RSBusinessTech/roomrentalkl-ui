import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-rental-properties',
  templateUrl: './rental-properties.component.html',
  styleUrls: ['./rental-properties.component.css']
})
export class RentalPropertiesComponent implements OnChanges{

  @Input() rooms: any[] = [];
  @Input() roomSlug: string = '';

  showGallery = false;
  galleryImages: string[] = [];
  galleryIndex = 0;
  selectedImage = '';

  //========================================
// PAGINATION
//========================================

paginatedRooms: Room[] = [];

currentPage = 1;

itemsPerPage = 6;

totalPages = 1;

@HostListener('window:resize')
onResize() {

  this.setItemsPerPage();

}

ngOnChanges(changes: SimpleChanges): void {

  if (changes.rooms) {

    this.currentPage = 1;

    this.setItemsPerPage();

  }

}

setItemsPerPage() {

  if (window.innerWidth < 768) {

    // Mobile

    this.itemsPerPage = 4;

  }

  else if (window.innerWidth < 1200) {

    // Tablet

    this.itemsPerPage = 6;

  }

  else {

    // Desktop

    this.itemsPerPage = 9;

  }

  this.calculatePagination();

}

calculatePagination() {

  this.totalPages =
    Math.ceil(
      this.rooms.length /
      this.itemsPerPage
    );

  const start =
    (this.currentPage - 1) *
    this.itemsPerPage;

  const end =
    start +
    this.itemsPerPage;

  this.paginatedRooms =
    this.rooms.slice(
      start,
      end
    );

  this.generateVisiblePages();

}

previousPage() {

  if (this.currentPage > 1) {

    this.currentPage--;

    this.calculatePagination();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

}

nextPage() {

  if (
    this.currentPage <
    this.totalPages
  ) {

    this.currentPage++;

    this.calculatePagination();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

}

goToPage(page: number) {

  if (page === 0) {
    return;
  }

  this.currentPage = page;

  this.calculatePagination();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

generateVisiblePages() {

  const total = this.totalPages;
  const current = this.currentPage;
  const pages: number[] = [];

  // Show all pages if there are only 5 or fewer
  if (total <= 5) {

    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }

  } else {

    // Beginning
    if (current <= 3) {

      pages.push(1, 2, 0, total - 1, total);

    }

    // End
    else if (current >= total - 2) {

      pages.push(1, 2, 0, total - 1, total);

    }

    // Middle
    else {

      pages.push(
        1,
        0,
        current - 1,
        current,
        current + 1,
        0,
        total
      );

    }

  }

  this.visiblePages = pages;

}

// generateVisiblePages() {

//   const total =
//     this.totalPages;

//   const current =
//     this.currentPage;

//   const pages: number[] = [];

//   if (total <= 7) {

//     for (let i = 1; i <= total; i++) {

//       pages.push(i);

//     }

//   }

//   else {

//     pages.push(1);

//     if (current > 3) {

//       pages.push(0);

//     }

//     const start =
//       Math.max(
//         2,
//         current - 1
//       );

//     const end =
//       Math.min(
//         total - 1,
//         current + 1
//       );

//     for (
//       let i = start;
//       i <= end;
//       i++
//     ) {

//       pages.push(i);

//     }

//     if (current < total - 2) {

//       pages.push(0);

//     }

//     pages.push(total);

//   }

//   this.visiblePages = pages;

// }


visiblePages: number[] = [];

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