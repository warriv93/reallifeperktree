import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "./comp/PerkHeader";
import PerkCard from "./comp/PerkCard";
import { perkList } from "../../api";

import "./styles/perkPage.scss";
import "./styles/perkCard.scss";

const Perk = () => {
  //fetch param from url
  const { urltitle } = useRouter().query;

  //TODO Hur löser jag denna cluster fuck
  // perk kan bli undefined eller en string o då kan jag inte retunera den in till perk={} för den vill ha enbart perk type
  function createPerkHeader() {
    
    return (
      perkList &&
      urltitle &&
      perkList.map(perk => perk.title == urltitle && <PerkHeader perk={perk} />)
    );
  }
  function createPerkCard() {
    //TODO: add map for each info card and spawn more cards
    return (
      perkList &&
      urltitle &&
      perkList.map(perk => perk.title == urltitle && <PerkCard />)
    );
  }

  return (
    <Layout>
      {createPerkHeader()}
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
