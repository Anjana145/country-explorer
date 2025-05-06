export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Country Info Dashboard | Made with React & TypeScript
        </p>
      </footer>
    );
  };