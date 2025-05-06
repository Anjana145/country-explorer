
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 pt-8 pb-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Country Explorer</h3>
          <p className="text-sm text-gray-400">
            Explore population stats, regions, languages, and more about every country in the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/countries" className="hover:text-white transition">
                Countries
              </a>
            </li>
            <li>
              <a href="/chart" className="hover:text-white transition">
                Population Chart
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              🌐 Website
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              💼 LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              🐙 GitHub
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Country Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};