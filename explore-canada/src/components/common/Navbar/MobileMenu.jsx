import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const MobileMenu = ({
  isOpen,
  navItem,
  socialLinks,
  currentPath,
  onClose
}) => {
  return (
    <div className={`fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out transform
    ${
      isOpen? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* 닫기 버튼 (캐나다 빨간색 적용)*/}
      <button onClick={onClose} className='absolute top-4 right-4 p-2 text-gray-700 hover:text-red-600 focus:outline-none' aria-label='Close menu'>
      <FaTimes className='w-6 h-6'/>
      </button>

      {/* 매뉴 컨텐츠 */}
      <div className=' flex flex-col h-full justify-center items-center space-y-8'>
        {/* 네비게이션 링크 */}
        <nav className=' flex flex-col items-center space-y-6'>
          {navItem.map((item)=>(
            <Link key={item.path} to={item.path} className={`text-2xl font-medium px-4 py-2 rounded-lg transition-colors ${currentPath === item.path ? 'bg-red-100 text-red-600' : 'text-gray-700 hover:bg-gray-100'}`} onClick={onClose}>
              <div className=' flex items-center space-x-3'>
                <span className='text-xl'>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* SNS 아이콘 (모바일에서 중앙 정렬) */}
        <div className='flex space-x-6 pt-8'>
          {socialLinks.map((social) =>(
            <a key={social.name} href={social.url} target='_blank' rel='nooppener noreferrer' className=' p-2 text-2xl text-gray-600 hover:text-red-600 transition-colors' aria-label={social.name}>{social.icon}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  navItem: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
    ).isRequired,
    currentPath: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}