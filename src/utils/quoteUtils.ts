import { Quote, QuoteCache } from '../types/quote';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const getCachedQuote = (): QuoteCache | null => {
  const cached = localStorage.getItem('quoteCache');
  if (!cached) return null;
  
  try {
    return JSON.parse(cached) as QuoteCache;
  } catch {
    localStorage.removeItem('quoteCache');
    return null;
  }
};

const cacheQuote = (quote: Quote): void => {
  const cache: QuoteCache = {
    quote,
    expiresAt: Date.now() + CACHE_DURATION
  };
  localStorage.setItem('quoteCache', JSON.stringify(cache));
};

export const fetchDailyQuote = async (): Promise<Quote> => {
  // Check cache first
  const cached = getCachedQuote();
  if (cached && cached.expiresAt > Date.now()) {
    return cached.quote;
  }

  try {
    const response = await fetch('https://api.quotable.io/random?tags=inspirational,motivation');
    
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await response.json();
    
    const quote: Quote = {
      text: data.content,
      author: data.author,
      timestamp: Date.now()
    };

    // Cache the new quote
    cacheQuote(quote);
    
    return quote;
  } catch (error) {
    // Fallback quote in case of API failure
    return {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      timestamp: Date.now()
    };
  }
};