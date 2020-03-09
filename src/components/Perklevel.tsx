import * as React from "react";
type Props = {
  image: string;
  grayscale: string;
};

const PerkLevel: React.FunctionComponent<Props> = ({grayscale, image}
) => (
  <li className="perk-level">
    <img src={image} alt="perk-image" className={`perk-image ${grayscale}`} />
  </li>
);

export default PerkLevel;
