import React, { Fragment } from "react";
import RadioButtons from "./radiobtns";
import Input from "./input";
import { QuestionType } from "../../../utils/types";

// interface Props {
//     type:
//   }

export default function Question({
  finalAnswers,
  activePerkQuestionIndex,
  setcurrentanswer,
  currentQuestion,
}) {
  function typeOfQuestion(type: QuestionType) {
    let exisitingAnswer = finalAnswers.find(
      (answer) => answer.question == activePerkQuestionIndex
    );

    // console.log("typeOfQuestion, EXISTS: ", exisitingAnswer, tempAnswer);
    switch (type) {
      case 0:
        //   type: QuestionType["1-5"],
        return (
          <Fragment>
            <RadioButtons
              existingAnswer={exisitingAnswer ? exisitingAnswer : null}
              questionID={activePerkQuestionIndex}
              setcurrentanswer={setcurrentanswer}
              labels={["No", "Not really", "Kind of", "Yes", "Absolutely"]}
            />
          </Fragment>
        );
      case 1:
        //   type: QuestionType["input"],
        return (
          <Fragment>
            <Input
              questionID={activePerkQuestionIndex}
              setcurrentanswer={setcurrentanswer}
              existingAnswer={exisitingAnswer ? exisitingAnswer : null}
              placeholder={currentQuestion.placeholder}
            />
          </Fragment>
        );

      case 2:
        //   type: QuestionType["rarely-often"],
        return (
          <Fragment>
            <RadioButtons
              existingAnswer={exisitingAnswer && exisitingAnswer}
              questionID={activePerkQuestionIndex}
              setcurrentanswer={setcurrentanswer}
              labels={[
                "Not at all",
                "Very rarely",
                "Some times",
                "Often",
                "All the time",
              ]}
            />
          </Fragment>
        );
      default:
        return <Fragment />;
    }
  }

  return typeOfQuestion(currentQuestion.type);
}
