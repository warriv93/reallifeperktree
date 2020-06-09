import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "next/head";
import "../styles/globalstyles.scss";
import "../styles/bootstrap.css";

import { getUserLoggedin } from "../api/userlocalstorage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilAlt,
  faTimes,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faPencilAlt, faAngleRight, faTimes);

interface Props {}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div id="page-container">
    <Header>
      <title>Perktree</title>
      {/* <link
        rel="shortcut icon"
        type="image/png"
        href="/assets/profilepic.png"
      /> */}
    </Header>
    <Navbar loggedin={getUserLoggedin() || false} />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
