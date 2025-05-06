import React, { useState } from 'react';
import { useFetchCountryNews } from '../hooks/useFetchCountryNews';

export const NewsPage = () => {
  const [countryName, setCountryName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { news, loading, error } = useFetchCountryNews({ countryName });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCountryName(searchQuery.trim() || null);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Global Country News</h1>

      {/* Search Box */}
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
        <label htmlFor="country-search" className="block text-lg font-medium mb-2">
          Search News by Country
        </label>
        <div className="flex gap-2">
          <input
            id="country-search"
            type="text"
            placeholder="e.g., India, USA, Brazil"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* News Section */}
      <section>
        {loading && <p className="text-center py-10">Loading news...</p>}
        {error && <p className="text-red-500 text-center py-4">{error}</p>}

        {!loading && !error && (
          <>
            {countryName ? (
              <h2 className="text-2xl font-semibold mb-4">
                Latest News in <span className="text-blue-500">{countryName}</span>
              </h2>
            ) : (
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Latest Global News
              </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.length > 0 ? (
                news.slice(0, 9).map((article, index) => (
                  <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                    {article.urlToImage && (
                      <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover" />
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                          {article.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-2">{article.description}</p>
                      <div className="text-sm text-gray-500 flex justify-between items-center">
                        <span>{article.source.name}</span>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Read More →
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full py-10 text-gray-500">
                  No news found. Try searching for a specific country.
                </p>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
};