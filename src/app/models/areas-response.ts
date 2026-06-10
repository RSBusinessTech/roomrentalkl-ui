import { Area } from "./area";
import { AreaGuide } from "./areaguide";
import { Faq } from "./faq";
import { MarketInsight } from "./marketInsight";
import { MrtStation } from "./mrtStation";
import { NearbyArea } from "./nearbyArea";
import { PopularSearch } from "./popularSearch";
import { PriceGuide } from "./priceGuide";
import { RecentlyRented } from "./recentlyRented";
import { Room } from "./room";
import { RoomRequest } from "./roomRequest";

export interface AreasResponse {
  area: Area;
  featuredRooms: Room[];
  latestRooms: Room[];
  areaGuide: AreaGuide;
  mrtStations: MrtStation[];
  priceGuide: PriceGuide[];
  marketInsights: MarketInsight;
  nearbyAreas: NearbyArea[];
  popularSearches: PopularSearch[];
  recentlyRented: RecentlyRented[];
  roomRequests: RoomRequest[];
  faqs: Faq[];
}