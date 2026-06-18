import { InternalLinking } from "./internalLinking";

export interface SeoMetadata {
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoScore: number;
  canonicalUrl: string;
  schemaType: string;
  intentCluster?: string;
  contentCluster?: string[];

  // ADD THIS
  internalLinking: InternalLinking;
}