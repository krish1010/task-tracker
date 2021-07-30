import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <p>&copy; Krish's Task Tracker</p>
      {location.pathname === "/" && <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
