import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const MobileMenu = 

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