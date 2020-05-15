import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Perk from "./comp/perk";

import "./styles/index.scss";
import { getUserPerks } from "../../api/userlocalstorage";
import { perkList } from "../../api/";

export default function perktree() {
  const [perks, setPerks] = useState(perkList);

  useEffect(() => {
    getUserPerks((perks) => setPerks(perks));
    // If we pass an empty array to useEffect, it’s only executed after the first render. https://www.andreasreiterer.at/react-useeffect-hook-loop/
  }, []);

  return (
    <Layout>
      <div className="perktree-container">
        {perks &&
          perks.map((perk, index) => (
            <Perk
              key={index}
              level={perk.level}
              title={perk.title}
              image={perk.image}
            />
          ))}
      </div>
    </Layout>
  );
}
