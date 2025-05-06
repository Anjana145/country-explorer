import { useEffect, useState } from 'react';

const API_KEY = 'Replace with your real api'; //Go to https://newsapi.org/ and sign up for a free account. You’ll get an API key and replace:

type NewsArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: { name: string };
};

interface UseFetchCountryNewsProps {
  countryName: string | null;
}

export const useFetchCountryNews = ({ countryName }: UseFetchCountryNewsProps) => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let query = 'world';
        if (countryName) {
          query = countryName;
        }

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`
        );

        const data = await response.json();

        if (data.status === 'ok') {
          setNews(data.articles);
        } else {
          throw new Error('Failed to load news');
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [countryName]);

  return { news, loading, error };
};