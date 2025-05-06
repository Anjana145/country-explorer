
interface RegionSidebarProps {
  onSelectRegion: (region: string | null) => void;
}

export const RegionSidebar = ({ onSelectRegion }: RegionSidebarProps) => {
  const regions = [
    'All',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
  ];

  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Category</h2>
      <ul className="space-y-2">
        {regions.map((region) => (
          <li key={region}>
            <button
              onClick={() => onSelectRegion(region === 'All' ? null : region)}
              className="w-full text-left px-3 py-2 rounded hover:bg-blue-100 transition"
            >
              {region}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};