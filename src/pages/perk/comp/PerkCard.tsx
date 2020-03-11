import React, { Fragment } from "react";

interface Props {
}

const perkHeader: React.FunctionComponent<Props> = () => (
  <Fragment>
    <a href={"/"}>
      <div className="perk-card">
        <h3>{"perk.title"}</h3>
        <p>{"perk.description"}</p>
        <button className="btn btn-outline-success">Learn</button>
      </div>
    </a>
  </Fragment>
);

export default perkHeader;
