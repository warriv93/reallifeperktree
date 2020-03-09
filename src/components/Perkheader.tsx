import React from "react";
import Perk from "../components/Perk";
import { Perk as IPerk } from "../interfaces";

interface Props {
  perk: IPerk;
}

const perkHeader: React.FunctionComponent<Props> = ({ perk }) => (
  <div className="perktree-container">
    <Perk level={perk.level} title={perk.title} image={perk.image} />
  </div>
);

export default perkHeader;