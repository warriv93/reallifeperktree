import React from "react";
import Perk from "../../perktree/comp/Perk";
import { Perk as IPerk } from "../../../utils/types";
import { perkList } from "../../../api";

import "../styles/perkHeader.scss";

interface Props {
  urlperk: string | string[]
}
 //TODO Hur löser jag denna cluster fuck
  // perk kan bli undefined eller en string o då kan jag inte retunera den in till perk={} för den vill ha enbart perk type
  // urltitle: string | string[] hur gör man så detta bara är en string?
function determinePerkToShow(urlperk: string | string[], perkList: Array<IPerk>) {
  return (
    perkList &&
    urlperk &&
    // check type of urltitle
    typeof urlperk === "string"  &&
    perkList.map(perk => perk.title == urlperk && perk)[0]
  );
}

const perkHeader: React.FunctionComponent<Props> = ({urlperk}) => {
  let perk = determinePerkToShow(urlperk, perkList);
  
  return (
    <div className="perktree-container perk-header">
      {perk && <Perk usedInPerkHeader={true} level={perk.level} title={perk.title} image={perk.image} description={perk.description} />}
    </div>
  );
}

export default perkHeader;