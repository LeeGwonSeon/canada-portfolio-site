// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <motion.header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm' initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
        <nav className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <motion.div className='text-2xl font-bold text-red-600' whileHover={{ scale: 1.05 }}>
           🇨🇦 Canada Travel
          </motion.div>
          <ul className='hidden md:flex space-x-8'>
            {['Home', '여행지', '갤러리', '문의'].map((item) =>(
              <motion.li key={item}>
                <motion.a href={`#${item.toLowerCase()}`} className='text-gray-700 hover:text-red-600 font-medium transition-colors' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className='h-screen flex items-center justify-center relative overflow-hidden'>
        {/* 배경 이미지 */}
        <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920')`}} />
          <div className='relative z-10 text-center text-white px-6'>
            <motion.h1 className='text-4xl md:text-6xl font-bold mb-6' initial={{ opacity: 0, y: 50 }} animate={{ opacity:1, y: 0 }} transition={{ duration: 0.8 }}>
              캐나다의 아름다운 자연을 만나보세요
            </motion.h1>
            <motion.p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              록키산맥부터 나이아가라 폭포까지, 캐나다의 멋진 여행지를 소개합니다
            </motion.p>
            <motion.button className='bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4}} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              여행 시작하기
            </motion.button>
          </div>
      </section>

      {/* 인기 혀행지 섹션 */}
      <section id='destinations' className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            인기 여행지
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
                title: "밴프 국립공원",
                description: "캐나다 록키산맥의 절경을 만나볼 수 있는 곳"
              },
              {
                image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
                title: "토론토",
                description: "캐나다 최대 도시의 다양한 문화와 랜드마크"
              },
              {
                image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=400&h=300&fit=crop",
                title: "나이아가라 폭포",
                description: "세계적으로 유명한 거대한 폭포의 웅장함"
              },
              {
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                title: "밴쿠버",
                description: "산과 바다가 어우러진 아름다운 서부 도시"
              }
            ].map((place, index) =>(
              <motion.div key={place.title} className='bg-white rounded-2xl shadow-lg overflow-hidden' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} viewport={{ once: true }}>
                <div className='overflow-hidden'>
                  <motion.img src={place.image} alt={place.title} className='w-full h-48 object-cover' transition={{ duration: 0.3 }} />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>{place.title}</h3>
                  <p className='text-gray-600'>{place.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 갤러리 섹션 */}
      <section id='gallery' className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            캐나다 여행 갤러리
          </motion.h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
              "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=300&h=200&fit=crop",
              "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=300&h=200&fit=crop",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
            ].map((image, index)=>(
              <motion.div key={index} className='overflow-hidden rounded-xl' initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.05 }} viewport={{ once: true }}>
                <img src={image} alt={`갤러리 ${index + 1}`} className='w-full h-48 object-cover cursor-pointer' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section id='contact' className='py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.h2 className='text-3xl md:text-4xl font-bold text-center mb-16' initial={{ opacity: 0, y:30 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            여행 문의
          </motion.h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className='text-2xl font-semibold mb-6'>캐나다 여행이 궁금하시다면?</h3>
              <div className='space-y-4'>
                <p className='flex items-center text-lg'>
                  <span className='mr-3'>📧</span>contrcti@canadatravel.com
                </p>
                <p className='flex items-center text-lg'>
                  <span className='mr-3'>📞</span>010-0000-0000
                </p>
                <p className='flex items-center text-lg'>
                  <span className='mr-3'>📍</span>서울시 강남구
                </p>
              </div>
            </motion.div>

            <motion.form className='space-y-4' initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <motion.input type='text' placeholder='이름' className='w-full px-4 py-3 rounded-lg text-gray-800' whileFocus={{ scale: 1.02}} />
              <motion.input type='email' placeholder='이메일' className='w-full px-4 py-3 rounded-lg text-gray-800' whileFocus={{ scale: 1.02}} />
              <motion.textarea placeholder='문의내용' rows='4' className='w-full px-4 py-3 rounded-lg text-gray-800 resize-none' whileFocus={{ scale: 1.02}} />
              <motion.button type='submit' className='w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-colors' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                문의하기
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white text-center py-8'>
        <p>&copy; 2025 Canada Travel. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
