import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "../perk/comp/PerkHeader";
import InputPerkData from "./comp/inputperkdata";

const PerkInput = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;
   
  return (
    <Layout>
      <PerkHeader urlperk={urlperk}/>
      <div className="perk-cards-container">
        <InputPerkData urlperk={urlperk}/>
      </div>
      {/* TODO add info items containers */}
    </Layout>
  );
};

export default PerkInput;
