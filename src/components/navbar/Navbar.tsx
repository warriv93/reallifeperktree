import Link from "next/link";
import { Fragment, useState } from "react";
import profileface from "../../assets/profilepic.png";
import MobileMenu from "./mobileMenu";
import Menuitems from "./menuitems";
import "./styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  loggedin: Boolean;
}

export default function Navbar({ loggedin }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <div className="navbar-close-icon">
              <FontAwesomeIcon icon="times" />
            </div>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <Menuitems />
          </ul>
        </div>
        <ul className="nav navbar-nav navbar-right">
          {/* Profile */}
          {loggedin ? (
            <li className="profile">
              <Link href="/profile">
                <div>
                  <a className="nav-link">Profile</a>
                  <div className="image">
                    <img src={profileface} alt="Profilememes" />
                  </div>
                </div>
              </Link>
            </li>
          ) : (
            <li className="profile">
              <Link href="/login">
                <div>
                  <a className="nav-link"> Login / Create User</a>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {<MobileMenu toggle={open ? "open" : ""} />}
    </Fragment>
  );
}
