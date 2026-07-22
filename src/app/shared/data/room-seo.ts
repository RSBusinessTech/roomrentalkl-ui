export interface RoomFAQ {
  question: string;
  answer: string;
}

export interface RelatedRoom {
  name: string;
  slug: string;
  url: string;
}

export interface PopularSearch {
  label: string;
  url: string;
}

export interface RoomSEO {
  slug: string;
  url: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  robots: string;

  // Hero
  heroImage: string;
  h1: string;
  shortTitle: string;
  introContent: string;

  // Stats
  roomCountLabel: string;
  locationCountLabel: string;

  // SEO Content
  introTitle: string;

  whyChooseTitle: string;
  whyChooseContent: string[];

  rentalGuideTitle: string;
  rentalGuideContent: string;

  whoIsItForTitle: string;
  whoIsItForContent: string;

  // FAQ
  faqs: RoomFAQ[];

  // Internal Links
  relatedRooms: RelatedRoom[];

  // Popular Searches
  popularSearches: PopularSearch[];

  // Breadcrumb
  breadcrumbName: string;
}


export const ROOM_SEO: { [key: string]: RoomSEO } = {


  /* =====================================================
     1. ROOMS FOR RENT KL
  ===================================================== */

  'rooms-for-rent-kl': {

    slug: 'rooms-for-rent-kl',
    url: '/rooms-for-rent-kl',

    metaTitle: 'Rooms for Rent in Kuala Lumpur | Find Rooms in KL',

    metaDescription:
      'Find rooms for rent in Kuala Lumpur including master rooms, medium rooms, single rooms, studios, furnished rooms and budget rooms.',

    canonicalUrl:
      'https://anaangproperty.com/rooms-for-rent-kl',

    robots: 'index, follow',

    heroImage:
      '/assets/images/rooms/rooms-for-rent-kl.jpg',

    h1:
      'Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Rooms for Rent in KL',

    introContent:
      'Find the best rooms for rent in Kuala Lumpur. Explore furnished, affordable and convenient room rentals near MRT, LRT, shopping malls, universities and business hubs.',

    roomCountLabel:
      'Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Rent a Room in Kuala Lumpur?',

    whyChooseContent: [
      'Access to major business districts, shopping malls and entertainment areas.',
      'Convenient connectivity through MRT, LRT, monorail and public transport.',
      'A wide selection of rooms for different budgets and lifestyles.',
      'Suitable for working professionals, students and long-term tenants.'
    ],

    rentalGuideTitle:
      'Room Rental Guide in Kuala Lumpur',

    rentalGuideContent:
      'Room rental prices in Kuala Lumpur vary depending on location, room type, furnishing, condominium facilities and proximity to public transportation.',

    whoIsItForTitle:
      'Who Are These Rooms Suitable For?',

    whoIsItForContent:
      'Room rentals in Kuala Lumpur are suitable for working professionals, students, expatriates, young professionals and tenants looking for convenient accommodation.',

    faqs: [
      {
        question: 'Where can I find rooms for rent in Kuala Lumpur?',
        answer:
          'You can explore available rooms for rent across Kuala Lumpur, including different room types, locations and rental budgets.'
      },
      {
        question: 'What types of rooms are available for rent in KL?',
        answer:
          'Common options include master rooms, medium rooms, single rooms, studio rooms, shared rooms, furnished rooms and budget rooms.'
      }
    ],

    relatedRooms: [
      {
        name: 'Master Room Rental in KL',
        slug: 'master-room-rental-kl',
        url: '/master-room-rental-kl'
      },
      {
        name: 'Single Room Rental in KL',
        slug: 'single-room-rental-kl',
        url: '/single-room-rental-kl'
      },
      {
        name: 'Studio Room Rental in KL',
        slug: 'studio-room-rental-kl',
        url: '/studio-room-rental-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Master Room KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Master Room Bukit Jalil',
        url: '/room-rental-bukit-jalil'
      },
      {
        label: 'Room Near MRT',
        url: '/rooms-for-rent-kl'
      },
      {
        label: 'Fully Furnished Room',
        url: '/furnished-rooms-kl'
      },
      {
        label: 'Room Mont Kiara',
        url: '/room-rental-mont-kiara'
      }
    ],

    breadcrumbName:
      'Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     2. MASTER ROOM
  ===================================================== */

  'master-room-rental-kl': {

    slug: 'master-room-rental-kl',
    url: '/master-room-rental-kl',

    metaTitle:
      'Master Rooms for Rent in Kuala Lumpur | Master Room Rental KL',

    metaDescription:
      'Find the best master rooms for rent in Kuala Lumpur. Fully furnished, affordable and conveniently located near MRT, LRT, shopping malls and business hubs.',

    canonicalUrl:
      'https://anaangproperty.com/master-room-rental-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/master-room-kl.jpg',

    h1:
      'Master Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Master Room Rental in KL',

    introContent:
      'Find the best master rooms for rent in Kuala Lumpur. Fully furnished, affordable and located near MRT/LRT, shopping malls, universities and business hubs.',

    roomCountLabel:
      'Master Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find a Master Room for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose a Master Room?',

    whyChooseContent: [
      'More spacious than standard single or medium rooms.',
      'Often includes a private attached bathroom.',
      'Suitable for tenants who prefer greater privacy.',
      'Ideal for working professionals and couples.'
    ],

    rentalGuideTitle:
      'Master Room Rental Guide in Kuala Lumpur',

    rentalGuideContent:
      'Master room rental prices depend on location, property type, room size, furnishing, facilities and accessibility to MRT or LRT stations.',

    whoIsItForTitle:
      'Who Should Rent a Master Room?',

    whoIsItForContent:
      'Master rooms are suitable for working professionals, couples and tenants who prefer a larger living space and greater privacy.',

    faqs: [
      {
        question: 'What is a master room?',
        answer:
          'A master room is generally a larger bedroom within a shared property and may include a private attached bathroom.'
      },
      {
        question: 'How much is a master room for rent in KL?',
        answer:
          'The rental price varies depending on the location, property, room size, furnishing and available facilities.'
      }
    ],

    relatedRooms: [
      {
        name: 'Rooms for Rent in KL',
        slug: 'rooms-for-rent-kl',
        url: '/rooms-for-rent-kl'
      },
      {
        name: 'Medium Room Rental in KL',
        slug: 'medium-room-rental-kl',
        url: '/medium-room-rental-kl'
      },
      {
        name: 'Single Room Rental in KL',
        slug: 'single-room-rental-kl',
        url: '/single-room-rental-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Master Room KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Master Room Bukit Jalil',
        url: '/room-rental-bukit-jalil'
      },
      {
        label: 'Master Room Near MRT',
        url: '/master-room-rental-kl'
      },
      {
        label: 'Fully Furnished Master Room',
        url: '/furnished-rooms-kl'
      },
      {
        label: 'Master Room Mont Kiara',
        url: '/room-rental-mont-kiara'
      }
    ],

    breadcrumbName:
      'Master Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     3. MEDIUM ROOM
  ===================================================== */

  'medium-room-rental-kl': {

    slug: 'medium-room-rental-kl',
    url: '/medium-room-rental-kl',

    metaTitle:
      'Medium Rooms for Rent in Kuala Lumpur | Medium Room Rental KL',

    metaDescription:
      'Find medium rooms for rent in Kuala Lumpur with comfortable living spaces at affordable rental prices.',

    canonicalUrl:
      'https://anaangproperty.com/medium-room-rental-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/medium-room-kl.jpg',

    h1:
      'Medium Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Medium Room Rental in KL',

    introContent:
      'Explore medium rooms for rent in Kuala Lumpur that offer a balance between affordability, comfort and living space.',

    roomCountLabel:
      'Medium Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Medium Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose a Medium Room?',

    whyChooseContent: [
      'Balanced option between a master room and single room.',
      'Suitable for tenants looking for comfortable personal space.',
      'Often more affordable than renting a master room.',
      'Available in many condominiums and residential properties.'
    ],

    rentalGuideTitle:
      'Medium Room Rental Guide',

    rentalGuideContent:
      'Medium room rental prices depend on location, room size, furnishing, facilities and accessibility to public transportation.',

    whoIsItForTitle:
      'Who Are Medium Rooms Suitable For?',

    whoIsItForContent:
      'Medium rooms are suitable for students, working professionals and tenants looking for a comfortable room at a reasonable rental price.',

    faqs: [
      {
        question: 'What is a medium room?',
        answer:
          'A medium room is a standard-sized bedroom that generally offers more space than a single room while being more affordable than a master room.'
      }
    ],

    relatedRooms: [
      {
        name: 'Rooms for Rent in KL',
        slug: 'rooms-for-rent-kl',
        url: '/rooms-for-rent-kl'
      },
      {
        name: 'Master Room Rental in KL',
        slug: 'master-room-rental-kl',
        url: '/master-room-rental-kl'
      },
      {
        name: 'Single Room Rental in KL',
        slug: 'single-room-rental-kl',
        url: '/single-room-rental-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Medium Room KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Medium Room Near MRT',
        url: '/medium-room-rental-kl'
      },
      {
        label: 'Affordable Medium Room',
        url: '/budget-rooms-kl'
      },
      {
        label: 'Furnished Medium Room',
        url: '/furnished-rooms-kl'
      }
    ],

    breadcrumbName:
      'Medium Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     4. SINGLE ROOM
  ===================================================== */

  'single-room-rental-kl': {

    slug: 'single-room-rental-kl',
    url: '/single-room-rental-kl',

    metaTitle:
      'Single Rooms for Rent in Kuala Lumpur | Single Room Rental KL',

    metaDescription:
      'Find affordable single rooms for rent in Kuala Lumpur for students, professionals and tenants looking for private accommodation.',

    canonicalUrl:
      'https://anaangproperty.com/single-room-rental-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/single-room-kl.jpg',

    h1:
      'Single Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Single Room Rental in KL',

    introContent:
      'Find affordable single rooms for rent in Kuala Lumpur. Browse available private rooms in convenient locations across KL.',

    roomCountLabel:
      'Single Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find a Single Room for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Rent a Single Room?',

    whyChooseContent: [
      'Affordable option for individual tenants.',
      'Suitable for students and working professionals.',
      'Lower rental cost compared with larger room types.',
      'Convenient option for tenants who spend most of their time outside.'
    ],

    rentalGuideTitle:
      'Single Room Rental Guide in KL',

    rentalGuideContent:
      'Single room rental prices vary depending on location, furnishing, property type, facilities and proximity to public transportation.',

    whoIsItForTitle:
      'Who Should Rent a Single Room?',

    whoIsItForContent:
      'Single rooms are ideal for students, young professionals and individuals looking for affordable private accommodation in Kuala Lumpur.',

    faqs: [
      {
        question: 'Who should rent a single room in KL?',
        answer:
          'Single rooms are suitable for students, working professionals and individuals looking for affordable accommodation.'
      }
    ],

    relatedRooms: [
      {
        name: 'Medium Room Rental in KL',
        slug: 'medium-room-rental-kl',
        url: '/medium-room-rental-kl'
      },
      {
        name: 'Master Room Rental in KL',
        slug: 'master-room-rental-kl',
        url: '/master-room-rental-kl'
      },
      {
        name: 'Cheap Rooms in KL',
        slug: 'cheap-rooms-kl',
        url: '/cheap-rooms-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Single Room KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Single Room Near MRT',
        url: '/single-room-rental-kl'
      },
      {
        label: 'Cheap Single Room',
        url: '/cheap-rooms-kl'
      },
      {
        label: 'Furnished Single Room',
        url: '/furnished-rooms-kl'
      }
    ],

    breadcrumbName:
      'Single Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     5. STUDIO ROOM
  ===================================================== */

  'studio-room-rental-kl': {

    slug: 'studio-room-rental-kl',
    url: '/studio-room-rental-kl',

    metaTitle:
      'Studio Rooms for Rent in Kuala Lumpur | Studio Room Rental KL',

    metaDescription:
      'Find studio rooms for rent in Kuala Lumpur with private living spaces and convenient facilities.',

    canonicalUrl:
      'https://anaangproperty.com/studio-room-rental-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/studio-room-kl.jpg',

    h1:
      'Studio Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Studio Room Rental in KL',

    introContent:
      'Explore studio rooms for rent in Kuala Lumpur for tenants who prefer private and self-contained living spaces.',

    roomCountLabel:
      'Studio Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Studio Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose a Studio Room?',

    whyChooseContent: [
      'Greater privacy compared with shared room arrangements.',
      'Suitable for tenants who prefer independent living.',
      'Convenient option for working professionals.',
      'Often located in properties with modern facilities.'
    ],

    rentalGuideTitle:
      'Studio Room Rental Guide',

    rentalGuideContent:
      'Studio rental prices vary according to location, property facilities, unit size, furnishing and accessibility.',

    whoIsItForTitle:
      'Who Are Studio Rooms Suitable For?',

    whoIsItForContent:
      'Studio rooms are suitable for professionals, couples and tenants who prefer greater privacy and an independent living environment.',

    faqs: [
      {
        question: 'What is a studio room?',
        answer:
          'A studio room generally combines living and sleeping areas into one compact private space.'
      }
    ],

    relatedRooms: [
      {
        name: 'Rooms for Rent in KL',
        slug: 'rooms-for-rent-kl',
        url: '/rooms-for-rent-kl'
      },
      {
        name: 'Master Room Rental in KL',
        slug: 'master-room-rental-kl',
        url: '/master-room-rental-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Studio Room KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Studio Room Near MRT',
        url: '/studio-room-rental-kl'
      },
      {
        label: 'Furnished Studio Room',
        url: '/furnished-rooms-kl'
      }
    ],

    breadcrumbName:
      'Studio Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     6. CHEAP ROOMS
  ===================================================== */

  'cheap-rooms-kl': {

    slug: 'cheap-rooms-kl',
    url: '/cheap-rooms-kl',

    metaTitle:
      'Cheap Rooms for Rent in Kuala Lumpur | Affordable Rooms',

    metaDescription:
      'Find cheap and affordable rooms for rent in Kuala Lumpur for students, professionals and budget-conscious tenants.',

    canonicalUrl:
      'https://anaangproperty.com/cheap-rooms-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/cheap-rooms-kl.jpg',

    h1:
      'Cheap Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Cheap Rooms in KL',

    introContent:
      'Looking for cheap rooms for rent in Kuala Lumpur? Explore affordable room rental options across KL and find accommodation that fits your budget.',

    roomCountLabel:
      'Cheap Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Cheap Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Look for Cheap Rooms in KL?',

    whyChooseContent: [
      'Lower monthly rental costs.',
      'Suitable for students and budget-conscious tenants.',
      'Options available in different KL locations.',
      'Potential access to public transportation and nearby amenities.'
    ],

    rentalGuideTitle:
      'Affordable Room Rental Guide',

    rentalGuideContent:
      'Cheap room rental prices depend on location, room type, furnishing, property facilities and accessibility to public transportation.',

    whoIsItForTitle:
      'Who Are Cheap Rooms Suitable For?',

    whoIsItForContent:
      'Affordable rooms are suitable for students, young professionals and tenants who want to manage their monthly accommodation expenses.',

    faqs: [
      {
        question: 'Where can I find cheap rooms in KL?',
        answer:
          'Affordable rooms can be found in different areas of Kuala Lumpur depending on your budget and preferred location.'
      }
    ],

    relatedRooms: [
      {
        name: 'Budget Rooms in KL',
        slug: 'budget-rooms-kl',
        url: '/budget-rooms-kl'
      },
      {
        name: 'Single Room Rental in KL',
        slug: 'single-room-rental-kl',
        url: '/single-room-rental-kl'
      },
      {
        name: 'Shared Rooms in KL',
        slug: 'shared-rooms-kl',
        url: '/shared-rooms-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Cheap Rooms Near MRT',
        url: '/cheap-rooms-kl'
      },
      {
        label: 'Cheap Rooms KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Budget Rooms',
        url: '/budget-rooms-kl'
      }
    ],

    breadcrumbName:
      'Cheap Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     7. BUDGET ROOMS
  ===================================================== */

  'budget-rooms-kl': {

    slug: 'budget-rooms-kl',
    url: '/budget-rooms-kl',

    metaTitle:
      'Budget Rooms for Rent in Kuala Lumpur | Affordable Rentals',

    metaDescription:
      'Explore budget rooms for rent in Kuala Lumpur with affordable accommodation options for students, professionals and tenants.',

    canonicalUrl:
      'https://anaangproperty.com/budget-rooms-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/budget-rooms-kl.jpg',

    h1:
      'Budget Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Budget Rooms in KL',

    introContent:
      'Explore budget-friendly rooms for rent in Kuala Lumpur and find affordable accommodation that balances rental cost, location and convenience.',

    roomCountLabel:
      'Budget Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Budget Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose a Budget Room?',

    whyChooseContent: [
      'Manage monthly accommodation expenses.',
      'Suitable for students and working professionals.',
      'Options available across different locations.',
      'Practical choice for tenants prioritising affordability.'
    ],

    rentalGuideTitle:
      'Budget Room Rental Guide',

    rentalGuideContent:
      'Budget room rental prices depend on location, room type, furnishing, property facilities and access to public transportation.',

    whoIsItForTitle:
      'Who Should Consider a Budget Room?',

    whoIsItForContent:
      'Budget rooms are suitable for students, young professionals and tenants looking for practical accommodation at a reasonable rental price.',

    faqs: [
      {
        question: 'What is a budget room?',
        answer:
          'A budget room is an affordable room rental option designed for tenants who prioritise lower monthly rental costs.'
      }
    ],

    relatedRooms: [
      {
        name: 'Cheap Rooms in KL',
        slug: 'cheap-rooms-kl',
        url: '/cheap-rooms-kl'
      },
      {
        name: 'Single Room Rental in KL',
        slug: 'single-room-rental-kl',
        url: '/single-room-rental-kl'
      },
      {
        name: 'Shared Rooms in KL',
        slug: 'shared-rooms-kl',
        url: '/shared-rooms-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Budget Rooms Near MRT',
        url: '/budget-rooms-kl'
      },
      {
        label: 'Affordable Rooms KL',
        url: '/cheap-rooms-kl'
      }
    ],

    breadcrumbName:
      'Budget Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     8. SHARED ROOMS
  ===================================================== */

  'shared-rooms-kl': {

    slug: 'shared-rooms-kl',
    url: '/shared-rooms-kl',

    metaTitle:
      'Shared Rooms for Rent in Kuala Lumpur | Shared Room KL',

    metaDescription:
      'Find shared rooms for rent in Kuala Lumpur with affordable accommodation options for students and working professionals.',

    canonicalUrl:
      'https://anaangproperty.com/shared-rooms-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/shared-rooms-kl.jpg',

    h1:
      'Shared Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Shared Rooms in KL',

    introContent:
      'Looking for an affordable shared room in Kuala Lumpur? Explore shared accommodation options that can help reduce rental costs.',

    roomCountLabel:
      'Shared Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Shared Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose Shared Accommodation?',

    whyChooseContent: [
      'Potentially lower rental costs.',
      'Suitable for students and budget-conscious tenants.',
      'Opportunity to share living expenses.',
      'Access to facilities in shared residential properties.'
    ],

    rentalGuideTitle:
      'Shared Room Rental Guide',

    rentalGuideContent:
      'Shared room rental prices depend on the property, location, number of occupants, room arrangement and facilities.',

    whoIsItForTitle:
      'Who Are Shared Rooms Suitable For?',

    whoIsItForContent:
      'Shared rooms are suitable for students, young professionals and tenants who prioritise affordability.',

    faqs: [
      {
        question: 'What is a shared room?',
        answer:
          'A shared room is a bedroom shared by two or more occupants, usually at a lower rental cost than a private room.'
      }
    ],

    relatedRooms: [
      {
        name: 'Cheap Rooms in KL',
        slug: 'cheap-rooms-kl',
        url: '/cheap-rooms-kl'
      },
      {
        name: 'Budget Rooms in KL',
        slug: 'budget-rooms-kl',
        url: '/budget-rooms-kl'
      },
      {
        name: 'Single Room Rental in KL',
        slug: 'single-room-rental-kl',
        url: '/single-room-rental-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Shared Room Near MRT',
        url: '/shared-rooms-kl'
      },
      {
        label: 'Affordable Shared Room',
        url: '/budget-rooms-kl'
      }
    ],

    breadcrumbName:
      'Shared Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     9. FURNISHED ROOMS
  ===================================================== */

  'furnished-rooms-kl': {

    slug: 'furnished-rooms-kl',
    url: '/furnished-rooms-kl',

    metaTitle:
      'Furnished Rooms for Rent in Kuala Lumpur | Move-In Ready',

    metaDescription:
      'Find furnished rooms for rent in Kuala Lumpur with convenient move-in ready accommodation for professionals and students.',

    canonicalUrl:
      'https://anaangproperty.com/furnished-rooms-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/furnished-rooms-kl.jpg',

    h1:
      'Furnished Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Furnished Rooms in KL',

    introContent:
      'Find furnished rooms for rent in Kuala Lumpur that offer convenient move-in ready accommodation without the need to purchase major furniture items.',

    roomCountLabel:
      'Furnished Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Furnished Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Rent a Furnished Room?',

    whyChooseContent: [
      'Convenient move-in option.',
      'No need to purchase major furniture immediately.',
      'Suitable for expatriates and working professionals.',
      'Practical for tenants looking for convenient accommodation.'
    ],

    rentalGuideTitle:
      'Furnished Room Rental Guide',

    rentalGuideContent:
      'Furnished room rental prices depend on room type, location, furniture provided, property facilities and accessibility.',

    whoIsItForTitle:
      'Who Are Furnished Rooms Suitable For?',

    whoIsItForContent:
      'Furnished rooms are suitable for professionals, students, expatriates and tenants who prefer convenient move-in ready accommodation.',

    faqs: [
      {
        question: 'What is included in a furnished room?',
        answer:
          'Furnished rooms may include a bed, wardrobe, table and other basic furniture. The exact items depend on each property listing.'
      }
    ],

    relatedRooms: [
      {
        name: 'Semi-Furnished Rooms in KL',
        slug: 'semi-furnished-rooms-kl',
        url: '/semi-furnished-rooms-kl'
      },
      {
        name: 'Unfurnished Rooms in KL',
        slug: 'unfurnished-rooms-kl',
        url: '/unfurnished-rooms-kl'
      },
      {
        name: 'Rooms for Rent in KL',
        slug: 'rooms-for-rent-kl',
        url: '/rooms-for-rent-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Fully Furnished Room KLCC',
        url: '/room-rental-klcc'
      },
      {
        label: 'Furnished Room Near MRT',
        url: '/furnished-rooms-kl'
      },
      {
        label: 'Furnished Master Room',
        url: '/master-room-rental-kl'
      }
    ],

    breadcrumbName:
      'Furnished Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     10. SEMI-FURNISHED ROOMS
  ===================================================== */

  'semi-furnished-rooms-kl': {

    slug: 'semi-furnished-rooms-kl',
    url: '/semi-furnished-rooms-kl',

    metaTitle:
      'Semi-Furnished Rooms for Rent in Kuala Lumpur',

    metaDescription:
      'Find semi-furnished rooms for rent in Kuala Lumpur with essential furniture and practical accommodation options.',

    canonicalUrl:
      'https://anaangproperty.com/semi-furnished-rooms-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/semi-furnished-rooms-kl.jpg',

    h1:
      'Semi-Furnished Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Semi-Furnished Rooms in KL',

    introContent:
      'Explore semi-furnished rooms for rent in Kuala Lumpur for tenants looking for a balance between convenience and flexibility.',

    roomCountLabel:
      'Semi-Furnished Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Semi-Furnished Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose a Semi-Furnished Room?',

    whyChooseContent: [
      'Balance between furnished and unfurnished accommodation.',
      'Potentially lower rental costs than fully furnished rooms.',
      'Allows tenants to bring their preferred furniture.',
      'Suitable for longer-term tenants.'
    ],

    rentalGuideTitle:
      'Semi-Furnished Room Rental Guide',

    rentalGuideContent:
      'Rental prices depend on location, room type, furniture provided, property facilities and access to public transport.',

    whoIsItForTitle:
      'Who Are Semi-Furnished Rooms Suitable For?',

    whoIsItForContent:
      'Semi-furnished rooms are suitable for tenants who want some essential furniture but also prefer flexibility to bring their own belongings.',

    faqs: [
      {
        question: 'What is a semi-furnished room?',
        answer:
          'A semi-furnished room provides some basic furniture or fixtures, but the exact items included vary between properties.'
      }
    ],

    relatedRooms: [
      {
        name: 'Furnished Rooms in KL',
        slug: 'furnished-rooms-kl',
        url: '/furnished-rooms-kl'
      },
      {
        name: 'Unfurnished Rooms in KL',
        slug: 'unfurnished-rooms-kl',
        url: '/unfurnished-rooms-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Semi-Furnished Room KL',
        url: '/semi-furnished-rooms-kl'
      },
      {
        label: 'Affordable Semi-Furnished Room',
        url: '/budget-rooms-kl'
      }
    ],

    breadcrumbName:
      'Semi-Furnished Rooms for Rent in Kuala Lumpur'
  },


  /* =====================================================
     11. UNFURNISHED ROOMS
  ===================================================== */

  'unfurnished-rooms-kl': {

    slug: 'unfurnished-rooms-kl',
    url: '/unfurnished-rooms-kl',

    metaTitle:
      'Unfurnished Rooms for Rent in Kuala Lumpur | KL Rooms',

    metaDescription:
      'Find unfurnished rooms for rent in Kuala Lumpur for tenants who prefer flexible accommodation and the freedom to arrange their own furniture.',

    canonicalUrl:
      'https://anaangproperty.com/unfurnished-rooms-kl',

    robots:
      'index, follow',

    heroImage:
      '/assets/images/rooms/unfurnished-rooms-kl.jpg',

    h1:
      'Unfurnished Rooms for Rent in Kuala Lumpur',

    shortTitle:
      'Unfurnished Rooms in KL',

    introContent:
      'Explore unfurnished rooms for rent in Kuala Lumpur for tenants who prefer to arrange their own furniture and personal belongings.',

    roomCountLabel:
      'Unfurnished Rooms',

    locationCountLabel:
      'Locations',

    introTitle:
      'Find Unfurnished Rooms for Rent in Kuala Lumpur',

    whyChooseTitle:
      'Why Choose an Unfurnished Room?',

    whyChooseContent: [
      'Freedom to furnish the room according to your preferences.',
      'Suitable for tenants bringing their own furniture.',
      'Potentially lower rental costs depending on the property.',
      'Practical for longer-term accommodation.'
    ],

    rentalGuideTitle:
      'Unfurnished Room Rental Guide',

    rentalGuideContent:
      'Unfurnished room rental prices depend on location, room size, property type, facilities and proximity to public transportation.',

    whoIsItForTitle:
      'Who Are Unfurnished Rooms Suitable For?',

    whoIsItForContent:
      'Unfurnished rooms are suitable for tenants who already have furniture or prefer to customise their living space.',

    faqs: [
      {
        question: 'What is an unfurnished room?',
        answer:
          'An unfurnished room generally comes without most loose furniture, allowing tenants to arrange the room according to their preferences.'
      }
    ],

    relatedRooms: [
      {
        name: 'Furnished Rooms in KL',
        slug: 'furnished-rooms-kl',
        url: '/furnished-rooms-kl'
      },
      {
        name: 'Semi-Furnished Rooms in KL',
        slug: 'semi-furnished-rooms-kl',
        url: '/semi-furnished-rooms-kl'
      },
      {
        name: 'Rooms for Rent in KL',
        slug: 'rooms-for-rent-kl',
        url: '/rooms-for-rent-kl'
      }
    ],

    popularSearches: [
      {
        label: 'Unfurnished Room KL',
        url: '/unfurnished-rooms-kl'
      },
      {
        label: 'Affordable Unfurnished Room',
        url: '/budget-rooms-kl'
      }
    ],

    breadcrumbName:
      'Unfurnished Rooms for Rent in Kuala Lumpur'
  }

};