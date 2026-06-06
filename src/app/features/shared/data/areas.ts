export interface Area {
  name: string;
  shortName?: string;
  route: string;
  image: string;
  listings: number;
}

export const AREAS: Area[] = [

  // CORE KL
  {
    name: 'KLCC',
    route: '/room-rental-klcc',
    image: 'assets/images/areas/klcc.jpg',
    listings: 128
  },
  {
    name: 'Bukit Bintang',
    route: '/room-rental-bukit-bintang',
    image: 'assets/images/areas/bukit-bintang.jpg',
    listings: 104
  },
  {
    name: 'Mont Kiara',
    route: '/room-rental-mont-kiara',
    image: 'assets/images/areas/mont-kiara.jpg',
    listings: 96
  },
  {
    name: 'Bangsar',
    route: '/room-rental-bangsar',
    image: 'assets/images/areas/bangsar.jpg',
    listings: 75
  },
  {
    name: 'Cheras',
    route: '/room-rental-cheras',
    image: 'assets/images/areas/cheras.jpg',
    listings: 112
  },
  {
    name: 'Ampang',
    route: '/room-rental-ampang',
    image: 'assets/images/areas/ampang.jpg',
    listings: 68
  },
  {
    name: 'Bukit Jalil',
    route: '/room-rental-bukit-jalil',
    image: 'assets/images/areas/bukit-jalil.jpg',
    listings: 82
  },
  {
    name: 'Setapak',
    route: '/room-rental-setapak',
    image: 'assets/images/areas/setapak.jpg',
    listings: 71
  },
  {
    name: 'Kepong',
    route: '/room-rental-kepong',
    image: 'assets/images/areas/kepong.jpg',
    listings: 77
  },
  {
    name: 'KL Sentral',
    route: '/room-rental-kl-sentral',
    image: 'assets/images/areas/kl-sentral.jpg',
    listings: 85
  },

  // HIGH TRAFFIC
  {
    name: 'Damansara',
    route: '/room-rental-damansara',
    image: 'assets/images/areas/damansara.jpg',
    listings: 94
  },
  {
    name: 'Bandar Utama',
    route: '/room-rental-bandar-utama',
    image: 'assets/images/areas/bandar-utama.jpg',
    listings: 58
  },
  {
    name: 'Petaling Jaya',
    shortName: 'PJ',
    route: '/room-rental-pj',
    image: 'assets/images/areas/pj.jpg',
    listings: 120
  },
  {
    name: 'Sunway',
    route: '/room-rental-sunway',
    image: 'assets/images/areas/sunway.jpg',
    listings: 80
  },
  {
    name: 'Subang Jaya',
    route: '/room-rental-subang-jaya',
    image: 'assets/images/areas/subang-jaya.jpg',
    listings: 76
  },
  {
    name: 'USJ',
    route: '/room-rental-usj',
    image: 'assets/images/areas/usj.jpg',
    listings: 54
  },

  // OLD KL
  {
    name: 'Brickfields',
    route: '/room-rental-brickfields',
    image: 'assets/images/areas/brickfields.jpg',
    listings: 44
  },
  {
    name: 'Pudu',
    route: '/room-rental-pudu',
    image: 'assets/images/areas/pudu.jpg',
    listings: 61
  },
  {
    name: 'Chow Kit',
    route: '/room-rental-chow-kit',
    image: 'assets/images/areas/chow-kit.jpg',
    listings: 39
  },
  {
    name: 'Seputeh',
    route: '/room-rental-seputeh',
    image: 'assets/images/areas/seputeh.jpg',
    listings: 36
  },

  // EXPAT
  {
    name: 'TTDI',
    route: '/room-rental-ttdi',
    image: 'assets/images/areas/ttdi.jpg',
    listings: 52
  },

  // FUTURE GROWTH
  {
    name: 'Cyberjaya',
    route: '/room-rental-cyberjaya',
    image: 'assets/images/areas/cyberjaya.jpg',
    listings: 73
  },
  {
    name: 'Putrajaya',
    route: '/room-rental-putrajaya',
    image: 'assets/images/areas/putrajaya.jpg',
    listings: 49
  }

];