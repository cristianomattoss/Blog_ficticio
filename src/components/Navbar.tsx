import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h2 className="blog-name">Blog Fictício</h2>
      <ul className="blog-pages">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
