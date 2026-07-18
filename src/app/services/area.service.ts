import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AreasResponse } from '../models/areas-response';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  // URL of Rest API to fetch area page data
  private url = 'http://localhost:8080/roomrentalkl/areas';
  // private url = 'https://rsbusinesstech-backend.onrender.com/roomrentalkl/areas';

  // local in-memory cache
  private areaCache: { [slug: string]: AreasResponse } = {};

  // dependency injection
  constructor(private httpClient: HttpClient) {}

  // fetch area page data
  getArea(slug: string): Observable<AreasResponse> {

    // return from cache if available
    if (this.areaCache[slug]) {
      return of(this.areaCache[slug]);
    }

    const apiUrl = `${this.url}/${slug}`;

    return this.httpClient.get<AreasResponse>(apiUrl).pipe(
      tap((data) => {

        // save result in cache
        this.areaCache[slug] = data;

      })
    );
  }

  // get cached area
  getCachedArea(slug: string): AreasResponse | null {

    return this.areaCache[slug] || null;

  }

  // clear specific cache
  clearAreaCache(slug: string): void {

    delete this.areaCache[slug];

  }

  // clear all cache
  clearAllCache(): void {

    this.areaCache = {};

  }
}