import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CountryDetail} from './components/CountryDetail';
import { Navbar } from './components/NavBar';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
};