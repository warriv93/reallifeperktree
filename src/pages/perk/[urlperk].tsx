import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "./comp/PerkHeader";
import PerkCard from "./comp/PerkCard";
import { perkList } from "../../api";

import "./styles/perkPage.scss";
import "./styles/perkCard.scss";

const Perk = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;

  function createPerkCard() {
    //TODO: add map for each info card and spawn more cards
    return (
      perkList &&
      urlperk &&
      perkList.map(perk => perk.title == urlperk && <PerkCard key={perk.level} />)
    );
  }

  return (
    <Layout>
      <PerkHeader urlperk={urlperk}/>
      <div className="perk-cards-container">
        {createPerkCard()}
        {createPerkCard()}
        {createPerkCard()}
        {createPerkCard()}
      </div>
      {/* TODO add info items containers */}
    </Layout>
  );
};

export default Perk;