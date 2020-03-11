import React, { Fragment } from "react";
import { Perk as IPerk } from "../../../utils/types";

interface Props {
  perk: IPerk;
}

const perkHeader: React.FunctionComponent<Props> = ({ perk }) => (
  <Fragment>
    <a href={"/"}>
      <div className="perk-card">
        <h3>{perk.title}</h3>
        <p>{perk.description}</p>
        <button className="btn btn-outline-success">Learn</button>
      </div>
    </a>
  </Fragment>
);

export default perkHeader;
