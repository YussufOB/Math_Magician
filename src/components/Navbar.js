import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <nav>
      <div>
        <Link
          className="logo"
          to="/"
        >
          Math Magicians
        </Link>
      </div>
      <ul>
        <li>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Calculator"
          >
            Calculator
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Quote"
          >
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
