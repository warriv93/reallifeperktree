import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PerkHeader from "../perk/comp/PerkHeader";
import InputPerkData from "./comp/inputperkdata";
import Summary from "./comp/summary";

const PerkInput = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;
  const [perkDataSubmitted, setPerkDataSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);

  function setFinalAnswersFromInput(answers) {
    setAnswers(answers);
  }

  return (
    <Layout>
      <PerkHeader urlperk={urlperk} />
      <div className="perk-cards-container">
        {perkDataSubmitted ? (
          <Summary answers={answers} />
        ) : (
          <InputPerkData
            setPerkDataSubmitted={setPerkDataSubmitted}
            setFinalAnswersFromInput={setFinalAnswersFromInput}
            urlperk={urlperk}
          />
        )}
      </div>
    </Layout>
  );
};

export default PerkInput;
