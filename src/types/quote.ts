export interface Quote {
  text: string;
  author: string;
  timestamp?: number;
}

export interface QuoteCache {
  quote: Quote;
  expiresAt: number;
}