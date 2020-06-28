import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import PerkHeader from "../perk/comp/perkheader";
import InputPerkData from "./comp/inputperkdata";
import Summary from "./comp/summary";
import { getUserPerk } from "../../api/userlocalstorage";
import { Question } from "../../utils/types";

const PerkInput = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;
  const [questions, setQuestions] = useState<Array<Question>>();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // check values and type of urltitle
    // iterate over perkList, if perk title = urlperk setPerk
    if (urlperk && typeof urlperk === "string")
      getUserPerk(urlperk).then((perk) => setQuestions(perk.questions));
  }, [urlperk]);

  function setFinalAnswersFromInput(answers) {
    setAnswers(answers);
  }

  return (
    <Layout>
      <PerkHeader urlperk={urlperk} />
      <div className="perk-cards-container">
        {answers.length > 0 ? (
          <Summary answers={answers} urlperk={urlperk} />
        ) : (
          <InputPerkData
            setFinalAnswersFromInput={setFinalAnswersFromInput}
            questions={questions}
          />
        )}
      </div>
    </Layout>
  );
};

export default PerkInput;
