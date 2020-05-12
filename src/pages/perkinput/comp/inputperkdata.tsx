import React, { Fragment, useState, useEffect } from "react";
import Progress from "react-progressbar";
import { perkList } from "../../../api";
import { Perk as IPerk, QuestionType } from "../../../utils/types";
import RadioButtons from "./radiobtns";
import Input from "./input";
import "../../perk/styles/perkcard.scss";
import "../styles/inputperkdata.scss";

interface Props {
  urlperk: string | string[];
  setPerkDataSubmitted: Function;
  setFinalAnswersFromInput: Function;
}

export default function inputperkdata({
  urlperk,
  setPerkDataSubmitted,
  setFinalAnswersFromInput,
}: Props) {
  let originPerk: IPerk;
  // let originQuestion: Question;
  const [perk, setPerk] = useState(originPerk);
  const [activePerkQuestionIndex, setActivePerkQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(
    perk && perk.questions[activePerkQuestionIndex]
  );
  const [answers, setAnswers] = useState([]);
  const [tempAnswer, setTempAnswer] = useState(0);

  useEffect(() => {
    // check values and type of urltitle
    // iterate over perkList, if perk title = urlperk setPerk
    if (perkList && urlperk && typeof urlperk === "string") {
      let perk = perkList.filter((perk) => perk.title == urlperk)[0];
      setPerk(perk);
      setQuestion(perk.questions[0]);
    }
  }, [urlperk]);

  function settempanswer(answer) {
    setTempAnswer(answer);
  }

  function saveAnswer() {
    let answerMatch = answers.filter(
      (answer) => answer.question == activePerkQuestionIndex
    )[0];
    // console.log(answerMatch);

    if (!answerMatch) {
      // console.log("SAVE ANSWER", activePerkQuestionIndex, answers);

      setAnswers([
        ...answers,
        {
          question: activePerkQuestionIndex,
          answer: tempAnswer,
        },
      ]);
    }
    // if the answer is not the temp asnwer it needs to be updated
    else if (answerMatch.answer != tempAnswer) {
      // console.log(
      //   "UPDATE ANSWER id:",
      //   activePerkQuestionIndex,
      //   "answer",
      //   answerMatch.answer,
      //   "temp",
      //   tempAnswer,
      //   answers
      // );
      // update answer
      answerMatch.answer = tempAnswer;

      // AFTER AN UPDATE -> and previous answer exists on next question
      // sets tempanswer to the next questions answer (otherwise the update will be triggered even tho there is no change)
      answers.length - 1 > activePerkQuestionIndex &&
        setTempAnswer(answers[activePerkQuestionIndex + 1].answer);
    } else {
      // console.log("nothing happens");
      // IF NOTHING IS UPDATED OR SAVED -> and previous answer exists on next question
      // sets tempanswer to the next questions answer (otherwise the update will be triggered even tho there is no change)
      answers.length - 1 > activePerkQuestionIndex &&
        setTempAnswer(answers[activePerkQuestionIndex + 1].answer);
    }
  }

  function typeOfQuestion(type: QuestionType) {
    let exisitingAnswer = answers.filter(
      (answer) => answer.question == activePerkQuestionIndex
    )[0];

    // console.log("typeOfQuestion, EXISTS: ", exisitingAnswer, tempAnswer);
    switch (type) {
      case 0:
        //   type: QuestionType["1-5"],
        return (
          <Fragment>
            <RadioButtons
              answer={exisitingAnswer ? exisitingAnswer : null}
              questionID={activePerkQuestionIndex}
              settempanswer={settempanswer}
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
              settempanswer={settempanswer}
              answer={exisitingAnswer ? exisitingAnswer : null}
              placeholder={question.placeholder}
            />
          </Fragment>
        );

      case 2:
        //   type: QuestionType["rarely-often"],
        return (
          <Fragment>
            <RadioButtons
              answer={exisitingAnswer && exisitingAnswer}
              questionID={activePerkQuestionIndex}
              settempanswer={settempanswer}
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
        return <Fragment></Fragment>;
    }
  }

  function onSubmit() {
    saveAnswer();
    setPerkDataSubmitted(true);
    setFinalAnswersFromInput(answers);
  }

  return (
    <Fragment>
      {perk && activePerkQuestionIndex != 0 && (
        <Progress
          className="progressbar-container shadow"
          completed={Math.round(
            (activePerkQuestionIndex * 100) / perk.questions.length
          )}
        />
      )}
      {perk && (
        <div className="perk-card question">
          <div className="left">
            {/* when no more questions show thank you instead to give time for setAnswer to run, otherwise its to fast when going to summary page */}
            {perk.questions.length - 1 >= activePerkQuestionIndex ? (
              <Fragment>
                <p>{question.section && question.section}</p>
                <h3>{question.paragraph}</h3>
                <div className="question-type">
                  {typeOfQuestion(question.type)}
                </div>
              </Fragment>
            ) : (
              <p>
                Thank you for answering as honestly as possible, click "Progress
                perk" to proceed.
              </p>
            )}

            {activePerkQuestionIndex != 0 && (
              <button
                className="btn btn-outline-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setQuestion(perk.questions[activePerkQuestionIndex - 1]);
                  setActivePerkQuestionIndex(activePerkQuestionIndex - 1);
                }}
              >
                Previous
              </button>
            )}
            {/* when no more questions show progress perk btn instead */}
            {perk.questions.length - 1 >= activePerkQuestionIndex ? (
              <button
                className="btn btn-outline-success"
                onClick={(e) => {
                  e.preventDefault();
                  setQuestion(perk.questions[activePerkQuestionIndex + 1]);
                  setActivePerkQuestionIndex(activePerkQuestionIndex + 1);
                  saveAnswer();
                }}
              >
                Next
              </button>
            ) : (
              <button className="btn btn-outline-success" onClick={onSubmit}>
                Progress perk
              </button>
            )}
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
