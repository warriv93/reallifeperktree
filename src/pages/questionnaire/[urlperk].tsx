import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import PerkHeader from "../learn/comp/perkheader";
import Questionnaire from "./comp/questionnaire";
import Summary from "./comp/summary";

import { getUserPerk } from "../../api/userlocalstorage";
import { Question, Perk as IPerk } from "../../utils/types";

const PerkInput = () => {
  //fetch param from url
  const { urlperk } = useRouter().query;
  const [questions, setQuestions] = useState<Array<Question>>();
  const [answers, setAnswers] = useState<
    Array<{ question: number; answer: number }>
  >([]);
  const [perk, setPerk] = useState<IPerk>();

  useEffect(() => {
    // check values and type of urltitle
    // iterate over perkList, if perk title = urlperk -> setQuestions
    if (urlperk && typeof urlperk === "string")
      getUserPerk(urlperk).then((perk) => {
        setPerk(perk);
        setQuestions(perk.questions);
      });
  }, [urlperk]);

  function setFinalAnswersFromInput(
    answers: Array<{ question: number; answer: number }>
  ) {
    setAnswers(answers);
  }

  return (
    <Layout>
      <PerkHeader urlperk={urlperk} />
      <div className="perk-cards-container">
        {answers.length > 0 ? (
          <Summary answers={answers} perk={perk} />
        ) : (
          <Questionnaire
            setFinalAnswersFromInput={setFinalAnswersFromInput}
            questions={questions}
          />
        )}
      </div>
    </Layout>
  );
};

export default PerkInput;
