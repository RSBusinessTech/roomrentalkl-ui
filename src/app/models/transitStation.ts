export interface TransitStation {

  name: string;
  slug: string;

  stationType: 'MRT' | 'LRT' | 'Monorail' | 'KTM' | 'BRT' | string;
  line: string;

  walkingTime: string;
  distanceMeters: number;
  distanceText: string;

  title: string;
  shortDescription: string;

  averageRoomRent: number;

  seoTitle?: string;
  seoDescription?: string;
  canonicalSlug?: string;

  faqQuestion?: string;
  faqAnswer?: string;

  nearbyLandmarks: string[];
  nearbyResidences: string[];
  popularSearches: string[];

  nearbyTransitTypes?: string[];
}