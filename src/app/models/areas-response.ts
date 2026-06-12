import { Area } from "./area";
import { AreaGuide } from "./areaguide";
import { Faq } from "./faq";
import { MarketInsight } from "./marketInsight";
import { NearbyArea } from "./nearbyArea";
import { PopularSearch } from "./popularSearch";
import { PriceGuide } from "./priceGuide";
import { RecentlyRented } from "./recentlyRented";
import { Room } from "./room";
import { RoomRequest } from "./roomRequest";
import { TransitStation } from "./transitStation";

export interface AreasResponse {
  area: Area;
  featuredRooms: Room[];
  latestRooms: Room[];
  areaGuide: AreaGuide;
  transitStations: TransitStation[];
  priceGuide: PriceGuide[];
  marketInsights: MarketInsight;
  nearbyAreas: NearbyArea[];
  popularSearches: PopularSearch[];
  recentlyRented: RecentlyRented[];
  roomRequests: RoomRequest[];
  faqs: Faq[];
}