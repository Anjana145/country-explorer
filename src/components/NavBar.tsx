import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🌍 Country Dashboard</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/Country-info" className="hover:underline">Information</Link></li>
          <li><Link to="/news" className="hover:underline">News</Link></li>

        </ul>
      </div>
    </nav>
  );
};