// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion';
import TravelGallery from '../components/sections/TravelGallery';

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='py-20 text-center bg-gradient-to-r from-red-50 to-blue-50'>
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
          Explore Canada
        </motion.h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Discover breathtaking landscapes and vibrant cities
        </p>
      </section>

      {/* Gallery Preview */}
      <TravelGallery />
    </motion.main>
  );
};

export default Home;