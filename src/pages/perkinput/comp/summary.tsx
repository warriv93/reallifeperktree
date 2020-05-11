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
      perkSection: string,
      perkPlaceholder: string,
      tempTallness = 0;

    answers.map((answer, index) => {
      inputQuestiontype = perk.questions[answer.question].type == 1 && true;
      perkSection = perk.questions[answer.question].section
        ? perk.questions[answer.question].section
        : "";
      perkPlaceholder = perk.questions[answer.question].placeholder
        ? perk.questions[answer.question].placeholder
        : "";
      input = Number(answer.answer);

      console.log(answer);

      // TODO: SCORE from LEVEL 1-5
      if (inputQuestiontype) {
        switch (perkSection) {
          case "BMI":
            // source: https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm
            // https://www.thecalculatorsite.com/articles/health/bmi-formula-for-bmi-calculations.php
            // Underweight = <18.5
            // Normal weight = 18.5–24.9
            // Overweight = 25–29.9
            // Obesity = BMI of 30 or greater
            // console.log(perkSection, input, perkPlaceholder);
            if (perkPlaceholder == "cm" && tempTallness == 0)
              tempTallness = Math.abs(input / 100);

            if (tempTallness > 0 && perkPlaceholder == "kg") {
              let weight = input;
              let bmi = Math.abs(weight / Math.pow(tempTallness, 2));

              // obese and underweight
              newScore = bmi >= 30 && 1;
              newScore = bmi < 18 && 1;

              // since there are 2 questions here and the score will be devided by amount of questions we need to return double score
              newScore += bmi >= 25 ? 2 : 0;
              newScore += bmi >= 18 && bmi < 25 ? 8 : 0;
            }

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
            // console.log(perkSection, input);
            // scoring taken from my ass
            newScore += input >= 1 ? 1 : 0;
            newScore += input >= 3 ? 1 : 0;
            newScore += input >= 5 ? 1 : 0;
            newScore += input >= 10 ? 1 : 0;
            newScore += input >= 20 ? 1 : 0;
            break;
          default:
            newScore = newScore + answer.answer;

            break;
        }
      } else newScore = newScore + answer.answer;
    });
    console.log(score, newScore);
    // + 1 beacuse answeres return 0-4 and score perks are calculated 1-5
    newScore = Math.round((newScore + 1) / answers.length);
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
