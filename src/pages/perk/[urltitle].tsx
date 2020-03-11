import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "./comp/Perkheader"

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
    return perkList && urltitle && perkList.map(perk => perk.title == urltitle && <PerkHeader perk={perk} />);
  }

  return (
    <Layout>
      {createPerkHeader()}
      {/* TODO add info items containers */}
      <p>Perk: {urltitle}</p>
    </Layout>
  );
};

export default Perk;
