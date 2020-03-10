import React from "react";
// import Perk from "../../perktree/comp/Perk";
import { Perk as IPerk } from "../../../utils/types";

interface Props {
  perk: IPerk;
}

const perkHeader: React.FunctionComponent<Props> = ({ perk }) => (
  <div className="perktree-container">
    <p>{perk.title}</p>
    {/* <Perk level={perk.level} title={perk.title} image={perk.image} /> */}
  </div>
);

export default perkHeader;