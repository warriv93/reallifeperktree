import React, { useState, useEffect } from "react";
import Perk from "../../perktree/comp/perk";
import { Perk as IPerk } from "../../../utils/types";
import { perkList } from "../../../api";

import "../styles/perkheader.scss";

interface Props {
  urlperk: string | string[];
}
// TODO: urltitle: string | string[] hur gör man så detta bara är en string?

export default function perkHeader({ urlperk }: Props) {
  let originPerk: IPerk;
  const [perk, setPerk] = useState(originPerk);

  useEffect(() => {
    // check values and type of urltitle
    // iterate over perkList, if perk title = urlperk setPerk
    perkList &&
      urlperk &&
      typeof urlperk === "string" &&
      perkList.find((perk) => perk.title == urlperk && setPerk(perk));
    // only when urlperk changes, run as componentDidUpdate
  }, [urlperk, perk]);

  return (
    <div className="perktree-container perk-header">
      {perk && (
        <Perk
          usedInPerkHeader={true}
          level={perk.level}
          title={perk.title}
          image={perk.image}
          description={perk.description}
        />
      )}
    </div>
  );
}
