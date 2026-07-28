import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { RentalPropertiesResponse } from '../models/rental-properties-response';


@Injectable({
  providedIn: 'root'
})
export class RentalPropertiesService {


  // API URL
  // private url = 'http://localhost:8080/roomrentalkl/rooms';

  // Production
  private url = 'https://rsbusinesstech-backend.onrender.com/roomrentalkl/rooms';


  // In-memory cache
  private roomCache: {
    [roomSlug: string]: RentalPropertiesResponse
  } = {};


  constructor(
    private httpClient: HttpClient
  ) {}



  // =========================================
  // GET RENTAL PROPERTIES
  // =========================================
  getRentalProperties(
    roomSlug: string
  ): Observable<RentalPropertiesResponse> {


    // Return cache
    if (this.roomCache[roomSlug]) {

      return of(
        this.roomCache[roomSlug]
      );

    }


    const apiUrl =
      `${this.url}/${roomSlug}`;


    return this.httpClient
      .get<RentalPropertiesResponse>(apiUrl)
      .pipe(

        tap((data) => {

          this.roomCache[roomSlug] = data;

        }),

        catchError((error) => {

          console.error(
            'Rental properties API error',
            error
          );

          return throwError(() => error);

        })

      );

  }



  // =========================================
  // GET CACHE
  // =========================================
  getCachedRentalProperties(
    roomSlug: string
  ): RentalPropertiesResponse | null {

    return this.roomCache[roomSlug] || null;

  }



  // =========================================
  // CLEAR SINGLE CACHE
  // =========================================
  clearRentalPropertiesCache(
    roomSlug: string
  ): void {

    delete this.roomCache[roomSlug];

  }



  // =========================================
  // CLEAR ALL CACHE
  // =========================================
  clearAllRentalPropertiesCache(): void {

    this.roomCache = {};

  }

}