import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    formRef.current.reset();
  };
  return (
    <motion.section initial={{ x: '100%' }} animate={{ x: 0 }} className='container mx-auto px-4 py-16 max-w-2xl'>
      <h2 className='text-3xl font-bold text-center mb-12'>Conntact Me</h2>

      <form ref={formRef} onSubmit={handleSubmit} className='space-y-6 bg-white p-8 rounded-xl shadow-lg'>
        <div>
          <label className='block mb-2 font-medium'>Name</label>
          <input type="text" required className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500' />
        </div>
        <div>
          <label className='block mb-2 font-medium'>Email</label>
          <input type="text" required className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500' />
        </div>
        <div>
          <label className='block mb-2 font-medium'>Message</label>
          <textarea rows="5" required className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500'></textarea>
        </div>

        <motion.button whileTap={{ scale: 0.95 }} type='submit' className='w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition'>
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;