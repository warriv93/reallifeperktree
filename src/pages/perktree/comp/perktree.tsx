import { useEffect, useState } from "react";
import PerkHorizontalList from "./perkhorizontallist";

import { getUserPerks } from "../../../api/userlocalstorage";
import { perkList } from "../../../api/";
import "../styles/index.scss";

export default function perktree() {
  const [perks, setPerks] = useState(perkList);

  useEffect(() => {
    getUserPerks().then((perks) => perks && setPerks(perks));
    // If we pass an empty array to useEffect, it’s only executed after the first render. https://www.andreasreiterer.at/react-useeffect-hook-loop/
  }, []);

  return (
    <div className="perktree-container">
      {perks &&
        perks.map((perk) => (
          <PerkHorizontalList
            key={perk.id}
            level={perk.level}
            title={perk.title}
            image={perk.image}
          />
        ))}
    </div>
  );
}
