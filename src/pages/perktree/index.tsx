import Layout from "../../components/Layout";
import Perk from "./comp/perk";

import "./styles/index.scss";
import { perkList } from "../../api";

export default function perktree() {
  return (
    <Layout>
      <div className="perktree-container">
        {perkList &&
          perkList.map((perk, index) => {
            return (
              <Perk
                key={index}
                level={perk.level}
                title={perk.title}
                image={perk.image}
              />
            );
          })}
      </div>
    </Layout>
  );
}
