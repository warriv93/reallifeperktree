import Link from "next/link";
import { useEffect, useState } from "react";
import { Perk as IPerk } from "../../../utils/types";
import { updatePerk } from "../../../api/user";

interface Props {
  answers: Array<{ question: number; answer: number }>;
  perk: IPerk;
}

export default function summary({ answers, perk }: Props) {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    perk && calculateScore(perk);
  }, [perk]);

  // after the level has been calculated, update the users perklevel
  useEffect(() => {
    level != 0 &&
      perk &&
      updatePerk(perk.title, level).then((res) =>
        console.log("updated Perk CALLBACK: ", res)
      );
    // runs when level is changed
  }, [level]);

  // perk level algorithm calculates a score based on the answers
  function calculateScore(perk: IPerk) {
    let newLevel = 0,
      input = 0,
      inputQuestiontype: boolean,
      perkSection: string,
      perkPlaceholder: string,
      tempTallness = 0;

    console.log(answers);

    answers.map((answer) => {
      if (answer && !answer.answer) return;

      inputQuestiontype = perk.questions[answer.question].type == 1 && true;
      perkSection = perk.questions[answer.question].section
        ? perk.questions[answer.question].section
        : "";
      perkPlaceholder = perk.questions[answer.question].placeholder
        ? perk.questions[answer.question].placeholder
        : "";
      input = Number(answer.answer);

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
              newLevel = bmi >= 30 && 1;
              newLevel = bmi < 18 && 1;

              // since there are 2 questions here and the score will be devided by amount of questions we need to return double score
              newLevel += bmi >= 25 ? 2 : 0;
              newLevel += bmi >= 18 && bmi < 25 ? 8 : 0;
            }

            break;
          case "Build":
            // push ups and pull ups
            // console.log(perkSection);
            newLevel += input >= 1 ? 1 : 0;
            newLevel += input >= 10 ? 1 : 0;
            newLevel += input >= 20 ? 1 : 0;
            newLevel += input >= 40 ? 1 : 0;
            newLevel += input >= 60 ? 1 : 0;

            console.log("calced", newLevel);

            break;

          case "IQ":
            //SOURCE - IQ RANGE BELL CURVE https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiqtestprep.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fiq-distribution-curve-1.png&f=1&nofb=1
            // console.log(perkSection, " Answer: ", input);
            newLevel += input >= 70 ? 1 : 0;
            newLevel += input >= 85 ? 1 : 0;
            newLevel += input >= 100 ? 1 : 0;
            newLevel += input >= 115 ? 1 : 0;
            newLevel += input >= 130 ? 1 : 0;
            break;

          case "Stamina":
            // console.log(perkSection, input);
            // scoring taken from my ass
            newLevel += input >= 1 ? 1 : 0;
            newLevel += input >= 3 ? 1 : 0;
            newLevel += input >= 5 ? 1 : 0;
            newLevel += input >= 10 ? 1 : 0;
            newLevel += input >= 20 ? 1 : 0;
            break;
          default:
            newLevel = newLevel + answer.answer;

            break;
        }
        // + 1 beacuse answeres return 0-4 and score perks are calculated 1-5
      } else newLevel = newLevel + answer.answer + 1;
    });
    newLevel = Math.round(newLevel / answers.length);
    setLevel(newLevel);
  }

  return (
    <div className="perk-card score">
      <h3>Your new perk level is: {level}</h3>
      <Link href="/perktree">
        <a className="btn btn-success"> Perktree </a>
      </Link>
    </div>
  );
}
