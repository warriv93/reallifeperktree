import Link from "next/link";
import { useEffect, useState } from "react";
import { perkList } from "../../../api";
import { Perk as IPerk } from "../../../utils/types";

type Props = {
  answers: any[];
  urlperk: string | string[];
};

export default function summary({ answers, urlperk }: Props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(
      urlperk,
      perkList,
      perkList.filter((perk) => perk.title == urlperk)[0]
    );

    // check values and type of urltitle
    // iterate over perkList, if perk title = urlperk setPerk
    let perk =
      perkList &&
      urlperk &&
      typeof urlperk === "string" &&
      perkList.filter((perk) => perk.title == urlperk)[0];

    calculateScore(perk);
  }, [urlperk]);

  function calculateScore(perk: IPerk) {
    let newScore = 0,
      input = 0,
      inputQuestiontype: boolean,
      perkSection: string;

    answers.map((answer, index) => {
      inputQuestiontype = perk.questions[answer.question].type == 1 && true;
      perkSection = perk.questions[answer.question].section
        ? perk.questions[answer.question].section
        : "";
      input = Number(answer.answer);

      console.log(answer);

      // TODO: SCORE from LEVEL 1-5
      if (inputQuestiontype) {
        switch (perkSection) {
          case "BMI":
            console.log(perkSection);

            break;
          case "Build":
            console.log(perkSection);

            break;

          case "IQ":
            //SOURCE - IQ RANGE BELL CURVE https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiqtestprep.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fiq-distribution-curve-1.png&f=1&nofb=1
            // console.log(perkSection, " Answer: ", input);
            newScore += input >= 70 ? 1 : 0;
            newScore += input >= 85 ? 1 : 0;
            newScore += input >= 100 ? 1 : 0;
            newScore += input >= 115 ? 1 : 0;
            newScore += input >= 130 ? 1 : 0;
            break;

          case "Stamina":
            console.log(perkSection);

            break;
          default:
            newScore = newScore + answer.answer;

            break;
        }
      } else newScore = newScore + answer.answer;
    });
    console.log(score, newScore);
    newScore = Math.round(newScore / answers.length);
    setScore(newScore);
  }

  return (
    <div className="perk-card">
      <h3>Summary score: {score}</h3>
      {/* {answers.map((answer, index) => {
        return <p>{answer.answer}</p>;
      })} */}
      <Link href="/perktree">
        <a className="btn btn-success"> Perktree </a>
      </Link>
    </div>
  );
}
