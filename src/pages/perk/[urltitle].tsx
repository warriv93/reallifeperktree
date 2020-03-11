import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "./comp/PerkHeader";
import PerkCard from "./comp/PerkCard";

import "./styles/perkPage.scss";
import "./styles/perkCard.scss";
import { perkList } from "../../api";

// TODO try fetching API items
//   static getInitialProps = async ({ query }: NextPageContext) => {
//     try {
//     //   const { id } = query
//       const item = await sampleFetchWrapper(
//         // `http://localhost:3000/api/users/${Array.isArray(id) ? id[0] : id}`
//         "https://api.chucknorris.io/jokes/random"
//       )
//       return { item }
//     } catch (err) {
//       return { errors: err.message }
//     }
//   }

const Perk = () => {
  const router = useRouter();
  const { urltitle } = router.query;

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
      perkList.map(perk => perk.title == urltitle && <PerkCard perk={perk} />)
    );
  }

  return (
    <Layout>
      {createPerkHeader()}
      <div className="perk-card-container">
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
