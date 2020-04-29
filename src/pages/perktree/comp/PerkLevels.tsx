import * as React from "react";
import Link from "next/link";

import "../styles/perkLevel.scss";

type Props = {
  image: string;
  grayscale: string;
  title: string;
  usedInPerkHeader: boolean;
  currentLevel: number;
};

const PerkLevel: React.FunctionComponent<Props> = ({grayscale, image, title, usedInPerkHeader, currentLevel}) => (
  <li className="perk-level tooltip">
    {/* If perklevels are in the header or the user has not pregressed the perk -> perkinput, otherwise perk learn more */}
    <Link href={usedInPerkHeader || currentLevel <= 0 ? `/perkinput/${title}` : `/perk/${title}`}>
      <img src={image} alt="perk-image" className={`perk-image ${grayscale}`}  />
    </Link>
    {/* if the perk level is not yet aquired show a tooltip on hover */}
    {grayscale && <span className="perktooltiptext">Progress perk</span>}
  </li>
);

export default PerkLevel;
