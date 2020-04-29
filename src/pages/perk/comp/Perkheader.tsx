import React, {useState, useEffect} from "react";
import Perk from "../../perktree/comp/Perk";
import { Perk as IPerk } from "../../../utils/types";
import { perkList } from "../../../api";

import "../styles/perkHeader.scss";

interface Props {
  urlperk: string | string[]
}
  // TODO: urltitle: string | string[] hur gör man så detta bara är en string?

export default function perkHeader ({urlperk}: Props) {
  let originPerk: IPerk
  const [perk, setPerk] = useState(originPerk)
  // let perk = determinePerkToShow(urlperk, perkList);

  useEffect(() => {
    // check values and type of urltitle 
    // iterate over perkList, if perk title = urlperk setPerk
    perkList && urlperk && typeof urlperk === "string" && perkList.map(perk => perk.title == urlperk && setPerk(perk))
    // only when urlperk changes, run as componentDidUpdate
  }, [urlperk])
  
  return (
    <div className="perktree-container perk-header">
      {perk && <Perk usedInPerkHeader={true} level={perk.level} title={perk.title} image={perk.image} description={perk.description} />}
    </div>
  );
}