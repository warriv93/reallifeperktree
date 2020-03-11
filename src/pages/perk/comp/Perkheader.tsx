import React from "react";
import Perk from "../../perktree/comp/Perk";
import { Perk as IPerk } from "../../../utils/types";

import "../styles/perkHeader.scss";

interface Props {
  perk: IPerk;
}

const perkHeader: React.FunctionComponent<Props> = ({ perk }) => (
  <div className="perktree-container perk-header">
    <Perk usedInPerkHeader={true} level={perk.level} title={perk.title} image={perk.image} description={perk.description} />
  </div>
);

export default perkHeader;