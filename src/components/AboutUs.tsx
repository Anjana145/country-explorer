export const AboutPage = () => {
  return (
    <div className="about-page p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About This Website</h1>
        <p className="text-lg text-gray-600">
          A one-stop platform to explore country data, population stats, and regional insights.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our goal is to make global country information accessible, visual, and easy to understand.
          Whether you're a student, researcher, or just curious, our site provides real-time data,
          charts, and news about countries around the world.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Country facts, flags, and capitals</li>
          <li>Population statistics and comparisons</li>
          <li>Interactive charts by region and category</li>
          <li>Latest updates and news about nations</li>
          <li>Easy-to-use filters and search tools</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>Select a country or filter by region</li>
          <li>View detailed profile and key metrics</li>
          <li>Explore population trends in interactive charts</li>
          <li>Read up-to-date information and news</li>
        </ol>
      </section>

      {/* Team / Contact */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Get In Touch</h2>
        <p className="text-gray-700 mb-4">
          Have feedback or suggestions? We’d love to hear from you!
        </p>
        <address className="not-italic text-gray-600">
          Email: <a href="mailto:info@countrydata.com" className="text-blue-500 underline">info@countrydata.com</a><br />
          Follow us on <a href="#" className="text-blue-500 underline">Twitter</a>, <a href="#" className="text-blue-500 underline">LinkedIn</a>
        </address>
      </section>
    </div>
  );
};