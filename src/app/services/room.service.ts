// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';

// import { RoomsResponse } from '../models/rooms-response';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoomService {

//   // =========================================
//   // REST API URL
//   // =========================================

//   // Later, when Spring Boot API is ready:
//   // private url =
//   //   'http://localhost:8080/roomrentalkl/rooms';

//   private url =
//     'https://rsbusinesstech-backend.onrender.com/roomrentalkl/rooms';


//   // =========================================
//   // LOCAL IN-MEMORY CACHE
//   // =========================================

//   private roomCache: {
//     [slug: string]: RoomsResponse
//   } = {};


//   // =========================================
//   // DEPENDENCY INJECTION
//   // =========================================

//   constructor(
//     private httpClient: HttpClient
//   ) {}


//   // =========================================
//   // FETCH ROOM PAGE DATA
//   // =========================================

//   getRooms(
//     slug: string
//   ): Observable<RoomsResponse> {

//     // -----------------------------------------
//     // RETURN FROM CACHE IF AVAILABLE
//     // -----------------------------------------

//     if (this.roomCache[slug]) {

//       return of(
//         this.roomCache[slug]
//       );

//     }


//     // -----------------------------------------
//     // API URL
//     // -----------------------------------------

//     const apiUrl =
//       `${this.url}/${slug}`;


//     // -----------------------------------------
//     // FETCH DATA
//     // -----------------------------------------

//     return this.httpClient
//       .get<RoomsResponse>(apiUrl)
//       .pipe(

//         tap((data: RoomsResponse) => {

//           // Save response in cache
//           this.roomCache[slug] = data;

//         })

//       );

//   }


//   // =========================================
//   // GET CACHED ROOM DATA
//   // =========================================

//   getCachedRooms(
//     slug: string
//   ): RoomsResponse | null {

//     return this.roomCache[slug] || null;

//   }


//   // =========================================
//   // CLEAR SPECIFIC CACHE
//   // =========================================

//   clearRoomCache(
//     slug: string
//   ): void {

//     delete this.roomCache[slug];

//   }


//   // =========================================
//   // CLEAR ALL CACHE
//   // =========================================

//   clearAllCache(): void {

//     this.roomCache = {};

//   }

// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  /*
   * Temporary hardcoded response.
   *
   * Later, replace this with HttpClient API call.
   */

  private latestRooms: any[] = [

    {
      id: 1001,
      title: 'Master Room Near KLCC MRT',
      slug: 'master-room-near-klcc-mrt',
      description:
        'Spacious master room located just minutes from KLCC MRT with premium condo facilities and city views.',

      images: [
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1775741816/Vyen_Property_Advisor/brdhcpmbhyw6l8zcy39j.jpg',
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1765060311/Vyen_Property_Advisor/lrmaczw15pdaqclgl38a.jpg'
      ],

      thumbnail:
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1775741816/Vyen_Property_Advisor/brdhcpmbhyw6l8zcy39j.jpg',

      roomType: 'MASTER',
      propertyType: 'CONDO',

      price: 1500,
      deposit: 3000,
      maintenanceFee: 150,

      bedrooms: 1,
      bathrooms: 1,
      carparks: 2,
      sqft: 180,

      furnished: 'Fully Furnished',

      address: 'Binjai Residency, KLCC',
      area: 'KLCC',
      city: 'Kuala Lumpur',
      state: 'Kuala Lumpur',

      distanceToMrt: '2 mins (10 m)',
      mrtStationName: 'KLCC MRT',

      listedDate: '2026-06-01',

      isNew: true,
      featured: true,

      agent: {
        name: 'Ahmad Rahman',
        phone: '+60 12-345 6789',
        whatsapp: '+60 12-345 6789',
        email: 'ahmad@rentkl.com',

        avatar:
          'https://res.cloudinary.com/divjzb0t3/image/upload/v1781105766/agentpic_ci7aik.jpg',

        agencyName: 'KL Property Experts',
        verified: true
      },

      views: 1200,
      likes: 98,
      isLiked: false,

      tags: [
        'Near MRT',
        'City View',
        'Premium Condo'
      ],

      videoTourUrl: '',
      floorPlanUrl: ''
    },

    {
      id: 1002,
      title: 'Single Room at Binjai Residency',
      slug: 'single-room-binjai-residency',
      description:
        'Affordable single room in a high-end residence with excellent security and amenities.',

      images: [
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1775741816/Vyen_Property_Advisor/brdhcpmbhyw6l8zcy39j.jpg',
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1765060311/Vyen_Property_Advisor/lrmaczw15pdaqclgl38a.jpg'
      ],

      thumbnail:
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1775741816/Vyen_Property_Advisor/brdhcpmbhyw6l8zcy39j.jpg',

      roomType: 'SINGLE',
      propertyType: 'CONDO',

      price: 850,
      deposit: 1700,
      maintenanceFee: 100,

      bedrooms: 1,
      bathrooms: 1,
      carparks: 1,
      sqft: 120,

      furnished: 'Semi Furnished',

      address: 'Binjai Residency, KLCC',
      area: 'KLCC',
      city: 'Kuala Lumpur',
      state: 'Kuala Lumpur',

      distanceToMrt: '4 mins (200 m)',
      mrtStationName: 'Ampang Park MRT',

      listedDate: '2026-06-03',

      isNew: true,
      featured: true,

      agent: {
        name: 'Ahmad Rahman',
        phone: '+60 12-345 6789',
        whatsapp: '+60 12-345 6789',
        email: 'ahmad@rentkl.com',

        avatar:
          'https://res.cloudinary.com/divjzb0t3/image/upload/v1781105766/agentpic_ci7aik.jpg',

        agencyName: 'KL Property Experts',
        verified: true
      },

      views: 860,
      likes: 54,
      isLiked: false,

      tags: [
        'Budget Friendly',
        'Clean Unit'
      ],

      videoTourUrl: '',
      floorPlanUrl: ''
    },

    {
      id: 1003,
      title: 'Medium Room Near Avenue K',
      slug: 'medium-room-near-avenue-k',
      description:
        'Comfortable medium room with easy access to shopping malls and MRT stations.',

      images: [
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1775741816/Vyen_Property_Advisor/brdhcpmbhyw6l8zcy39j.jpg',
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1765060311/Vyen_Property_Advisor/lrmaczw15pdaqclgl38a.jpg'
      ],

      thumbnail:
        'https://res.cloudinary.com/divjzb0t3/image/upload/v1775741816/Vyen_Property_Advisor/brdhcpmbhyw6l8zcy39j.jpg',

      roomType: 'MEDIUM',
      propertyType: 'SERVICE RESIDENCE',

      price: 1100,
      deposit: 2200,
      maintenanceFee: 120,

      bedrooms: 1,
      bathrooms: 1,
      sqft: 150,
      carparks: 2,

      furnished: 'Fully Furnished',

      address: 'Avenue K Residences, KLCC',
      area: 'KLCC',
      city: 'Kuala Lumpur',
      state: 'Kuala Lumpur',

      distanceToMrt: '3 mins (150 m)',
      mrtStationName: 'KLCC MRT',

      listedDate: '2026-06-02',

      featured: true,

      agent: {
        name: 'Ahmad Rahman',
        phone: '+60 12-345 6789',
        whatsapp: '+60 12-345 6789',
        email: 'ahmad@rentkl.com',

        avatar:
          'https://res.cloudinary.com/divjzb0t3/image/upload/v1781105766/agentpic_ci7aik.jpg',

        agencyName: 'KL Property Experts',
        verified: true
      },

      views: 940,
      likes: 70,
      isLiked: false,

      tags: [
        'Near Mall',
        'Convenient Location'
      ],

      videoTourUrl: '',
      floorPlanUrl: ''
    }

  ];


  constructor() {}


  /*
   * Temporary method.
   *
   * Later this method can become:
   *
   * return this.httpClient.get<any>(
   *   `${this.url}/${slug}`
   * );
   */

  getRoomPage(slug: string): Observable<any> {

    return of({
      latestRooms: this.latestRooms
    });

  }


}