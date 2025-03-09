import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container py-2">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://www.freeiconspng.com/uploads/inspiration-icon-4.jpg"
            width="40"
            height="40"
            alt="Svg Icon Inspiration"
          />
          <span className="font-bold">NewsInnoscripts</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
