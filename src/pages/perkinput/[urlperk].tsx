import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "../perk/comp/PerkHeader";
import InputPerkData from "./comp/inputperkdata";

const PerkInput = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;
   
  return (
    <Layout>
      <div className="perk-cards-container">
        <PerkHeader urlperk={urlperk}/>
        <InputPerkData urlperk={urlperk}/>

        <p>{urlperk}</p>
      </div>
      {/* TODO add info items containers */}
    </Layout>
  );
};

export default PerkInput;
