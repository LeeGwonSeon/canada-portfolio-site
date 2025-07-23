// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='container mx-auto px-4 py-16'>
      <motion.div whileHover={{ scale: 1.02 }} className='bg-white p-8 rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold text-red-600 mb-6'>About Canada</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Nature</h3>
            <p className='text-gray-700'>
              Canada boasts 48 national parks and the longest coastline in the world.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Culture</h3>
            <p className='text-gray-700'>
              A multicultural society with two official languages: English and French.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;