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
    let newScore = 0;
    let inputQuestiontype: boolean;
    let perkSection: string;

    answers.map((answer, index) => {
      inputQuestiontype = perk.questions[answer.question].type == 1 && true;
      perkSection = perk.questions[answer.question].section
        ? perk.questions[answer.question].section
        : "";

      console.log(answer);

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
            console.log(perkSection, " Answer: ", answer.answer);

            newScore = answer.answer <= 70 && newScore;
            newScore = answer.answer >= 85 && newScore + 1;
            newScore = answer.answer >= 100 && newScore + 2;
            newScore = answer.answer >= 115 && newScore + 3;
            newScore = answer.answer >= 130 && newScore + 4;
            newScore = newScore + answer.answer;
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
