import { useState, useEffect } from 'react';
import { Quote } from '../types/quote';
import { fetchDailyQuote } from '../utils/quoteUtils';

interface UseQuoteReturn {
  quote: Quote | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useQuote = (): UseQuoteReturn => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const newQuote = await fetchDailyQuote();
      setQuote(newQuote);
    } catch (err) {
      setError('Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return { quote, loading, error, refetch: fetchQuote };
};