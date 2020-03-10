import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "./comp/Perkheader"
import { Perk as IPerk } from "../../utils/types";

import "./styles/perkpage.scss";
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
  
  
  
  function createPerkHeader (){
    let perk: IPerk = perkList.map(perk => {

      if(perk.title == urltitle) {
      }

      return perk
    })[0];
    // console.log(perk, urltitle);


    perk && <PerkHeader perk={perk} />
  }

  return (
    <Layout>
      {createPerkHeader()}
      {/* TODO add top container */}
      {/* TODO add info items containers */}
      <p>Perk: {urltitle}</p>
    </Layout>
  );
};

export default Perk;
