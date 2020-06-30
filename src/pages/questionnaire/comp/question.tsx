import React, { Fragment } from "react";
import RadioButtons from "./radiobtns";
import Input from "./input";
import { Question as QuestionType } from "../../../utils/types";

interface Props {
  findFinalAnswerToQuestion: Function;
  activePerkQuestionIndex: number;
  saveAnswer: Function;
  currentQuestion: QuestionType;
}

export default function Question({
  findFinalAnswerToQuestion,
  activePerkQuestionIndex,
  saveAnswer,
  currentQuestion,
}: Props) {
  let exisitingAnswer = findFinalAnswerToQuestion();
  switch (currentQuestion.type) {
    case 0:
      //   type: QuestionType["1-5"],
      return (
        <RadioButtons
          existingAnswer={exisitingAnswer ? exisitingAnswer.answer : null}
          questionID={activePerkQuestionIndex}
          saveAnswer={saveAnswer}
          labels={["No", "Not really", "Kind of", "Yes", "Absolutely"]}
        />
      );
    case 1:
      //   type: QuestionType["input"],
      return (
        <Input
          questionID={activePerkQuestionIndex}
          saveAnswer={saveAnswer}
          existingAnswer={exisitingAnswer ? exisitingAnswer.answer : null}
          placeholder={currentQuestion.placeholder}
        />
      );

    case 2:
      //   type: QuestionType["rarely-often"],
      return (
        <RadioButtons
          existingAnswer={exisitingAnswer ? exisitingAnswer.answer : null}
          questionID={activePerkQuestionIndex}
          saveAnswer={saveAnswer}
          labels={[
            "Not at all",
            "Very rarely",
            "Some times",
            "Often",
            "All the time",
          ]}
        />
      );
    default:
      return <Fragment />;
  }
}
