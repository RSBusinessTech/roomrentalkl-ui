export interface Room {

  // =========================
  // BASIC INFO
  // =========================
  id: number;
  title: string;
  slug: string;
  description: string;

  // =========================
  // IMAGES
  // =========================
  images: string[];
  thumbnail: string;

  // =========================
  // PRICE INFO
  // =========================
  price: number;               // monthly rent
  pricePerSqft?: number;       // RM psf
  deposit?: number;
  maintenanceFee?: number;

  // =========================
  // ROOM / UNIT SPECS
  // =========================
  roomType: string;            // Master / Studio / etc
  propertyType: string;        // Condo / Apartment / Service Residence

  bedrooms?: number;
  bathrooms?: number;
  carparks?: number;
  sqft?: number;

  furnished?: 'Fully Furnished' | 'Semi Furnished' | 'Unfurnished';

  // =========================
  // LOCATION INFO
  // =========================
  address: string;
  area: string;
  city: string;
  state: string;
  postalCode?: string;

  currentImageIndex?: number;

  distanceToMrt: string;       // "5 min (410 m) from KL Sentral"
  mrtStationName?: string;

  // =========================
  // LISTING INFO
  // =========================
  listedDate: string;
  updatedDate?: string;

  isNew?: boolean;
  featured: boolean;

  // =========================
  // AGENT INFO (IMPORTANT like PropertyGuru)
  // =========================
  agent: {
    name: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    avatar?: string;
    verified?: boolean;
    agencyName?: string;
    renTag?: string; // REN 12345
  };

  distanceToLrt?: string;
  lrtStationName?: string;

  // =========================
  // SOCIAL / ENGAGEMENT
  // =========================
  views?: number;
  likes?: number;
  isLiked?: boolean;

  // =========================
  // TAGS / HIGHLIGHTS
  // =========================
  tags?: string[]; // ["Move-in ready", "Near MRT", "City view"]

  // =========================
  // MEDIA EXTRA (optional)
  // =========================
  videoTourUrl?: string;
  floorPlanUrl?: string;
}