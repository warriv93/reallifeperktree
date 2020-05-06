import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";
import { perkList } from "../../../api";
import { Perk as IPerk, QuestionType } from "../../../utils/types";
import RadioButtons from "./radiobtns";
import "../../perk/styles/perkCard.scss";
interface Props {
  urlperk: string | string[];
}

export default function inputperkdata({ urlperk }: Props) {
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
    // console.log("settempanswer", answer);
    answer != false && setTempAnswer(answer);
    setTempAnswer(answer);
  }

  function saveAnswer() {
    let answerMatch = answers.filter(
      (answer) => answer.question == activePerkQuestionIndex
    )[0];
    console.log(answerMatch);

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
              labels={[
                "Not at all",
                "Not really",
                "Maybe",
                "Often",
                "Absolutely",
              ]}
            />
          </Fragment>
        );
      case 1:
        //   type: QuestionType["input"],
        return (
          <Fragment>
            <input type="number" className="form-control" placeholder="cm" />
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

  function onSubmit(e) {
    saveAnswer();

    console.info("onSubmit: ", answers);
  }

  return (
    <Fragment>
      {perk && perk.level > 0 ? (
        <Fragment>
          <h3>Progress perk further</h3>
          <p>Update answers to progress perk further</p>
        </Fragment>
      ) : (
        <Fragment>
          <h3>Initilization</h3>
          <p>
            Go ahead and fill out the form as honestly as possible to initialize
            the perk level
          </p>
        </Fragment>
      )}
      {perk && (
        <div className="perk-card">
          <div className="left">
            <h3>{question.paragraph}</h3>
            <div className="question-type">{typeOfQuestion(question.type)}</div>
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
            {perk.questions.length - 1 > activePerkQuestionIndex ? (
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
    </Fragment>
  );
}
