import * as React from "react";
import "../styles/globalStyles.scss";

interface Props {
  error: string;
}

const Layout: React.FunctionComponent<Props> = ({ error }) => (
  <div className="container">
    <p>{error ? error : "Page does not exist"}</p>
  </div>
);

export default Layout;
