import * as React from "react";
type Props = {
  image: string
};

const PerkLevel: React.FunctionComponent<Props> = ({image}
) => (
  <li className="perk-level">
    <img src={image} alt="perk-image" className="perk-image" />
  </li>
);

export default PerkLevel;
