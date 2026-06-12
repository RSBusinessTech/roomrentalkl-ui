import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-latest-rooms',
  templateUrl: './latest-rooms.component.html',
  styleUrls: ['./latest-rooms.component.css']
})
export class LatestRoomsComponent {
  @Input() rooms: any[] = [];
  @Input() area: any;
  showGallery = false;
  galleryImages: string[] = [];
  galleryIndex = 0;
  selectedImage = '';

  constructor(private router: Router) {}

  openRoom(slug: string) {
    this.router.navigate(['/room', slug]);
  }

  viewAll() {
    this.router.navigate(['/rooms'], {
      queryParams: {
        area: this.area ? this.area.slug : ''
      }
    });
  }

  toggleLike(room: any, event: Event) {
    event.stopPropagation();
    room.isLiked = !room.isLiked;
  }

  whatsapp(room: any, event: Event) {
    event.stopPropagation();

  // const phone =
  // room.agent && room.agent.whatsapp
  //   ? room.agent.whatsapp
  //   : (room.agent ? room.agent.phone : '');

  const phone = '601114278964';

    const msg = `Hi, I am interested in ${room.title}`;

    if (phone) {
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
        '_blank'
      );
    }
  }

  call(room: any, event: Event) {
    event.stopPropagation();

    if (room.agent && room.agent.phone) {
      // window.location.href = `tel:${room.agent.phone}`;
      window.location.href = `tel:601114278964`;
    }
  }

  share(room: any, event: Event) {
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
      var dummy = document.createElement('input');
       document.body.appendChild(dummy);
       dummy.value = url;
       dummy.select();
       document.execCommand('copy');
       document.body.removeChild(dummy);
       alert('Link copied');
    }
  }

   nextImage(room: any, event: Event) {
     event.stopPropagation();
     if (!room.images || !room.images.length) {
       return;
     }
     room.currentImageIndex =
       ((room.currentImageIndex || 0) + 1) %
       room.images.length;
   }

   prevImage(room: any, event: Event) {
     event.stopPropagation();
     if (!room.images || !room.images.length) {
       return;
     }
     room.currentImageIndex =
       ((room.currentImageIndex || 0) - 1 + room.images.length) %
       room.images.length;
   }

   getCurrentImage(room: any): string {
     if (!room.images || !room.images.length) {
       return room.thumbnail;
     }
     return room.images[room.currentImageIndex || 0];
   }

   openGallery(room: any, event: Event) {
     event.stopPropagation();
     this.galleryImages = room.images || [];
     this.galleryIndex = room.currentImageIndex || 0;
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
      (this.galleryIndex + 1) %
      this.galleryImages.length;
    this.selectedImage =
      this.galleryImages[this.galleryIndex];
  }

  galleryPrev(event: Event) {
    event.stopPropagation();
    this.galleryIndex =
      (this.galleryIndex - 1 +
        this.galleryImages.length)
        %
        this.galleryImages.length;
    this.selectedImage =
      this.galleryImages[this.galleryIndex];
  }
  
   selectGalleryImage(index: number) {
     this.galleryIndex = index;
     this.selectedImage = this.galleryImages[index];
   }

   getDaysAgo(dateString: string): number {
    const listedDate = new Date(dateString);
    const today = new Date();
    const diffTime = today.getTime() - listedDate.getTime();

    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
   }
}
