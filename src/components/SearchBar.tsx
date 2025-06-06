type SearchBarProps = {
    onSearch: (term: string) => void;
  };
  
  export const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
      <input
        type="text"
        placeholder="Search by country name..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  };