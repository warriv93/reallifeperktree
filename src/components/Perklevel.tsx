import * as React from "react";

type Props = {
  image: string;
  grayscale: string;
};

const PerkLevel: React.FunctionComponent<Props> = ({grayscale, image}
) => (
  <li className="perk-level tooltip">
    <img src={image} alt="perk-image" className={`perk-image ${grayscale}`}  />
    {grayscale && <span className="perktooltiptext">Progress perk</span>}
  </li>
);

export default PerkLevel;
