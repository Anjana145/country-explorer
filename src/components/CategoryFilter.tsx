import React from 'react';

interface CategoryFilterProps {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  regions,
  selectedRegion,
  onSelectRegion,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor="region-filter" className="block mb-2 font-medium">
        Filter by Region
      </label>
      <select
        id="region-filter"
        value={selectedRegion}
        onChange={(e) => onSelectRegion(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};