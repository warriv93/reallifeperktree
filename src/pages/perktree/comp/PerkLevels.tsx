import * as React from "react";
import Link from "next/link";

import "../styles/perklevel.scss";

type Props = {
  image: string;
  grayscale: string;
  title: string;
  usedInPerkHeader: boolean;
};

const PerkLevel: React.FunctionComponent<Props> = ({grayscale, image, title, usedInPerkHeader}) => (
  <li className="perk-level tooltip">
    <Link href={usedInPerkHeader ? `/inputperk/${title}` : `/perk/${title}`}>
      <img src={image} alt="perk-image" className={`perk-image ${grayscale}`}  />
    </Link>
    {/* if the perk level is not yet aquired show a tooltip on hover */}
    {grayscale && <span className="perktooltiptext">Progress perk</span>}
  </li>
);

export default PerkLevel;
