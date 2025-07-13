import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'; //react-router 사용 시
import DesktopNav from "./common/Navbar/DesktopNav";

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Canada 테마 메뉴 데이터
  const navItems = [
    { name: 'Home', path: '/', icon: '🏠'},
    { name: 'Canadaian Life', path: '/life', icon: '🍁'},
    { name: 'Portfolio', path: '/portfolio', icon: '📁'},
    { name: 'Travel Log', path: '/travel', icon: '✈️'},
    { name: 'Contact', path: '/contact', icon: '📧'}
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#'},
    { name: 'GitHub', icon: '💻', url: '#'},
    { name: 'LinkedIn', icon: '🔗', url: '#'}
  ]

  return (
  <header className="top-0 z-50 bg-white shadow-lg border-b border-gray-100 w-full">
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* 로고 - Canada 컬러 (#FF0000) 적용*/}
        <Link to="/" className="flext items-center space-x-2 group" onClick={() => setIsMenuOpen(false)}>
          <img src="/images" alt="Canada Maple Leaf" className="h-8 w-8 transition-transform group-hover:rotate-12"/>
          <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            CanadaFolio
          </span>
        </Link>
        
        {/* 데스크탑 네비게이션 */}
        <DesktopNav navItems={navItems} currentPath={location.pathname} socialLinks={socialLinks}>
        </DesktopNav>

        {/* 데스크탑 SNS 아이콘 */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social)=>(
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-red-50 transition-colors" aria-label={social.name}>
              <span className="text-xl hover:text-red-600">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* 모바일 메뉴 버튼 (Tailwind CSS 아이콘) */}
        <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox=" 0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      {/* 모바일 메뉴 (Tailwind CSS 트랜지션 적용) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 py-4': 'max-h-0 py-0'
      }`}>
        <div className="flex flex-col space-y-3 px-2">
          {navItems.map((item)=>(
            <Link key={item.name} to={item.path} className={`flex items-center space-x-2 py-2 px-4 rounded-lg transition-colors 
              ${location.pathname === item.path ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100 text-gray-700'}`}
              onClick={()=> setIsMenuOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
          ))}
        </div>
        <div className="flex justify-center space-x-6 pt-6">
          {socialLinks.map((social)=>(
            <a key={social.name} href={social.url} target="_blank" rel="noopener onreferrer" className="p-2 text-2xl hover:text-red-600 transition-colors" aria-label={social.name}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;