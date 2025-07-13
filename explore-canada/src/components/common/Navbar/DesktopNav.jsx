import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DesktopNav = ({navItems, currentPath, socialLinks }) => {
return(
  <div className='hidden md:flex items-center gap-8'>
    {/* 메인 네비게이션 메뉴 */}
    <nav className='flex gap-6'>
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} className={`px-3 py-2 text-sm font-medium transition-colors ${currentPath === item.path ? 'text-red-600 border-b-2 border-red-600':'text-gray-700 hover:text-red-500'}`}>
          {item.name}
        </Link>
      ))}
    </nav>

    {/* SNS 아이콘 그룹 */}
    <div className='flex items-center gap-4'>
      {socialLinks.map((social) => (
        <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-red-600 transition-colors' aria-label={social.name}>
          <span className='text-lg'>{social.icon}</span>
        </a>
      ))}
    </div>
  </div>
)
}

DesktopNav.PropTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default DesktopNav;