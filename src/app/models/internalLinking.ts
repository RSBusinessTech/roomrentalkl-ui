import { SeoInternalPage } from "./seoInternalPage";
import { SeoLinkPage } from "./seoLinkPage";

export interface InternalLinking {
  relatedAreas: string[];
  nearbyHotspots: string[];
  relatedSearchPages: SeoLinkPage[];
  internalPages: SeoInternalPage[];
}