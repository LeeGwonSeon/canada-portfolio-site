import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import HeroSection from './components/sections/Hero/HeroSection';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
