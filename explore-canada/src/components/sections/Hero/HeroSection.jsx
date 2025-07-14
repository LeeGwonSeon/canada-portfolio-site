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
        </section>
    )
}