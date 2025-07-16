/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section id='hero' className='relative h-screen w-full overflow-hidden'>
            {/* 백그라운드 이미지*/}
            <img src="/images/canada-banner.jpg" alt="Canadian Rockies Landscape" className=' absolute inset-0 w-full object-cover' loading='eager'/>
            
            {/* 그라데이션 오버레이 */}
            <div className=' absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-red-900/10'/>

            {/* 콘텐츠 컨테이너 */}
            <div className=' relative z-10 flex flex-col items-center justify-center h-full text-center px-4' />

            {/* 메인 타이틀 */}
            <motion.h1 initial = {{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0}} transition = {{ duration: 0.8}} className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
                Explore <span className='text-red-400'>Canada</span>
            </motion.h1>

            {/* 서브 타이틀 */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl text-white max-w-2xl mb-12">
                Discover the breathtaking beauty of Canadian wilderness
            </motion.p>

            {/* CTA 버튼 */}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Start Journey
            </motion.button>

            {/* 스크롤 유도 아이콘 */}
            <motion.div className="absolute bottom-8" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <FaArrowDown className="text-white text-2xl"/>
            </motion.div>
        </section>
    );
};

export default HeroSection;