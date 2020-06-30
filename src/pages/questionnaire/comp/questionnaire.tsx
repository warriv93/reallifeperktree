import React, { Fragment, useState, useEffect } from "react";
import Progress from "react-progressbar";
import { Question as QuestionType } from "../../../utils/types";
import NavButtons from "./navbuttons";

import Question from "./question";
import "../../learn/styles/perkcard.scss";
import "../styles/inputperkdata.scss";

interface Props {
  setFinalAnswersFromInput: Function;
  questions: Array<QuestionType>;
}

export default function inputperkdata({
  setFinalAnswersFromInput,
  questions,
}: Props) {
  const [activePerkQuestionIndex, setActivePerkQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
    questions && questions[activePerkQuestionIndex]
  );
  const [finalAnswers, setFinalAnswers] = useState<
    Array<{ question: number; answer: number }>
  >([]);

  useEffect(() => {
    setCurrentQuestion(questions && questions[activePerkQuestionIndex]);
  }, [questions, activePerkQuestionIndex]);

  function saveAnswer(answer: number) {
    console.log("SAVEANSWER, ", answer);

    if (answer == undefined || answer == null) return;
    // check if answer exists already

    let finalAnswerToQuestion = findFinalAnswerToQuestion();
    console.log(finalAnswerToQuestion, "finalAnswerToQuestion");

    //if not exist -> set the new answer
    if (finalAnswerToQuestion == null || finalAnswerToQuestion == undefined) {
      setFinalAnswers((oldAnswers) => [
        ...oldAnswers,
        {
          question: activePerkQuestionIndex,
          answer,
        },
      ]);
    }
    // if the answerAlreadyExist but is not the currentAnswer -> update
    else if (finalAnswerToQuestion.answer != answer) {
      console.log("update thta shietz");

      finalAnswerToQuestion.answer = answer;
    }
  }

  function submitFinalAnswers() {
    console.log("IM HERE, but what is happening");

    setFinalAnswersFromInput(finalAnswers);
  }

  function findFinalAnswerToQuestion(): { question: number; answer: number } {
    let answer =
      finalAnswers &&
      finalAnswers.find(
        (answer) => answer && answer.question == activePerkQuestionIndex
      );
    return answer ? answer : null;
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
                    findFinalAnswerToQuestion={findFinalAnswerToQuestion}
                    activePerkQuestionIndex={activePerkQuestionIndex}
                    saveAnswer={saveAnswer}
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
              saveAnswer={saveAnswer}
              submitFinalAnswers={submitFinalAnswers}
              questionsLength={questions.length}
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
