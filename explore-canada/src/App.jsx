import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import HeroSection from './components/sections/Hero/HeroSection';
import TravelLog from './pages/travel';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/travel' element={<TravelLog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
