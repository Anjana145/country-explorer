import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CountryDetail} from './components/CountryDetail';
import { Navbar } from './components/NavBar';
import ChartPage from './components/ChartPage';
import { AboutPage } from './components/AboutUs';
import { CountryInfoLayout } from './components/CountryInfoLayout';
import { Footer } from './components/Footer';
import { NewsPage } from './components/CountryNewsSection';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/country-info" element={<CountryInfoLayout />} />
          <Route path="/news" element={<NewsPage/>} />

        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};