import { useRouter } from "next/router";
import Layout from "../../components/layout";
import PerkHeader from "./comp/perkheader";
import PerkCards from "./comp/perkcard";

import "./styles/perkcard.scss";

const Perk = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;

  return (
    <Layout>
      <PerkHeader urlperk={urlperk} />
      <div className="perk-cards-container">
        <PerkCards urlperk={urlperk} />
      </div>
    </Layout>
  );
};

export default Perk;
