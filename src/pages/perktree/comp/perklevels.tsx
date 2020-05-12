import * as React from "react";
import Link from "next/link";
import { getUserLoggedin } from "../../../api/userlocalstorage";

import "../styles/perklevel.scss";

interface Props {
  image: string;
  grayscale: string;
  title: string;
  usedInPerkHeader: boolean;
  currentLevel: number;
}

const PerkLevel: React.FunctionComponent<Props> = ({
  grayscale,
  image,
  title,
  usedInPerkHeader,
  currentLevel,
}) => {
  let link: string;

  if (
    (currentLevel == 0 && getUserLoggedin()) ||
    (usedInPerkHeader && getUserLoggedin())
  ) {
    link = `/perkinput/${title}`;
  } else if (!usedInPerkHeader) {
    link = `/perk/${title}`;
  } else {
    link = "/login";
  }

  return (
    <li className="perk-level tooltip">
      {/* If perklevels are in the header or the user has not pregressed the perk -> perkinput, otherwise perk learn more */}
      <Link href={link}>
        <img
          src={image}
          alt="perk-image"
          className={`perk-image ${grayscale}`}
        />
      </Link>
      {/* if the perk level is not yet aquired show a tooltip on hover */}
      {grayscale && <span className="perktooltiptext">Progress perk</span>}
    </li>
  );
};

export default PerkLevel;
