import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DesktopNav = () => {
return
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