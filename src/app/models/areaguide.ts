export interface AreaGuide {
  title: string;
  description: string;

  buttonText: string;
  buttonLink?: string;

  highlights: string[];

  features: AreaFeature[];

  popularResidences: string[];

  nearbyLandmarks: string[];

  nearbyUniversities: string[];

  majorEmployers: string[];
}

export interface AreaFeature {
  icon: string;
  title: string;
  description: string;
}