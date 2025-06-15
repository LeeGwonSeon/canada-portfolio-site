import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import DestinationPage from './pages/Destinations';
import TipsPage from './pages/Tips';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<DestinationPage />} />
        <Route path='/tips' element={<TipsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
