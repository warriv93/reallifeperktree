import * as React from "react";
import Navbar from "./navbar/Navbar";
import Header from "next/head";
import "../styles/globalStyles.scss";
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

type Props = {};

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <Header>
      <title>Perktree</title>
      {/* <link
        rel="stylesheet"
        href="https://bootswatch.com/4/flatly/bootstrap.min.css"
      /> */}
      {/* <link href="../styles/globalStyles.scss" rel="stylesheet" /> */}
      <link
        rel="shortcut icon"
        type="image/png"
        href="/assets/profilepic.png"
      />
    </Header>
    <Navbar loggedin={getUserLoggedin() || false} />
    <div className="container">{children}</div>
  </div>
);

export default Layout;
