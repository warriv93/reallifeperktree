import Link from "next/link";
import profileface from "../assets/profileface2.jpg";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link">
            <Link href="/">Home</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Link href="/perktree">Perktree</Link>
          </a>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        {/* Profile */}
        <li className="profile">
          <a className="nav-link">
            <Link href="/profile">
              <div>
                Profile
                <div className="image">
                  <img src={profileface} alt="Profilememes" />
                </div>
              </div>
            </Link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
