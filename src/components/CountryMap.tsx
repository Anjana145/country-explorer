import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Define the type for the geography object
type GeographyFeature = {
  rsmKey: string;
  type: 'Feature';
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][];
  };
};

type GeographiesResult = {
  geographies: GeographyFeature[];
};

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const CountryMap = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }: GeographiesResult) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};