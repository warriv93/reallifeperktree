import React, { Fragment, useState, useEffect } from "react";
import Progress from "react-progressbar";
import { Question as QuestionType } from "../../../utils/types";

import Question from "./question";
import NavButtons from "./navbuttons";
import "../../perk/styles/perkcard.scss";
import "../styles/inputperkdata.scss";

interface Props {
  setFinalAnswersFromInput: Function;
  questions: Array<QuestionType>;
}

// TODO: FIX SO THAT IT IS A CONTROLLED COMPONENT - input value controlled by react
// TODO: bryt ner o fixa statefulness, inget clusterfuck plzzzz
export default function inputperkdata({
  setFinalAnswersFromInput,
  questions,
}: Props) {
  const [activePerkQuestionIndex, setActivePerkQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
    questions && questions[activePerkQuestionIndex]
  );
  const [finalAnswers, setFinalAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(0);

  useEffect(() => {
    setCurrentQuestion(questions && questions[activePerkQuestionIndex]);
  }, [questions, activePerkQuestionIndex]);

  useEffect(() => {
    console.log(
      "here,",
      activePerkQuestionIndex,
      finalAnswers[activePerkQuestionIndex]
    );
    if (finalAnswers[activePerkQuestionIndex]) {
      setCurrentAnswer(finalAnswers[activePerkQuestionIndex].question);
    }
  }, [activePerkQuestionIndex]);

  function setcurrentanswer(answer) {
    setCurrentAnswer(answer);
  }

  function saveAnswer() {
    // check if answer exists already
    let finalAnswerToQuestion = finalAnswers.find(
      (answer) => answer.question == activePerkQuestionIndex
    );

    //if not exist -> set the new answer
    if (!finalAnswerToQuestion) {
      setFinalAnswers((oldAnswers) => [
        ...oldAnswers,
        {
          question: activePerkQuestionIndex,
          answer: currentAnswer,
        },
      ]);
    }
    // if the answerAlreadyExist but is not the currentAnswer -> update
    else if (finalAnswerToQuestion.answer != currentAnswer) {
      console.log("time to update");

      finalAnswerToQuestion.answer = currentAnswer;
    }
  }

  function onSubmit() {
    saveAnswer();
    setFinalAnswersFromInput(finalAnswers);
  }

  return (
    <Fragment>
      {currentQuestion && activePerkQuestionIndex != 0 && (
        <Progress
          className="progressbar-container shadow"
          completed={Math.round(
            (activePerkQuestionIndex * 100) / questions.length
          )}
        />
      )}
      {currentQuestion && (
        <div className="perk-card question">
          <div className="left">
            {/* when no more questions show thank you instead to give time for setAnswer to run, otherwise its to fast when going to summary page */}
            {questions && questions.length - 1 >= activePerkQuestionIndex ? (
              <Fragment>
                <p>{currentQuestion.section && currentQuestion.section}</p>
                <h3>{currentQuestion.paragraph}</h3>
                <div className="question-type">
                  <Question
                    currentQuestion={currentQuestion}
                    finalAnswers={finalAnswers}
                    activePerkQuestionIndex={activePerkQuestionIndex}
                    setcurrentanswer={setcurrentanswer}
                  />
                </div>
              </Fragment>
            ) : (
              <p>
                Thank you for answering as honestly as possible, click "Progress
                perk" to proceed.
              </p>
            )}
            <NavButtons
              activePerkQuestionIndex={activePerkQuestionIndex}
              setActivePerkQuestionIndex={setActivePerkQuestionIndex}
              setQuestion={setCurrentQuestion}
              saveAnswer={saveAnswer}
              onSubmit={onSubmit}
              questions={questions}
            />
          </div>
        </div>
      )}
      <p>
        Try to be as honestly as possible to get an accurate perk level
        representation
      </p>
    </Fragment>
  );
}
