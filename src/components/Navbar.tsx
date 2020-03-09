import Link from "next/link";
import profileface from "../assets/profileface2.jpg";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">
              {" "}
              Home{" "}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/perktree">
            <a className="nav-link">Perktree</a>
          </Link>
        </li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        {/* Profile */}
        <li className="profile">
          <Link href="/profile">
            <div>
              <a className="nav-link"> Profile</a>
              <div className="image">
                <img src={profileface} alt="Profilememes" />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
