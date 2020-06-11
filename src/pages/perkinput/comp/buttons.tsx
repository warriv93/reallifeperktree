import React, { Fragment } from "react";

interface Props {
  activePerkQuestionIndex: number;
  setQuestion: Function;
  setActivePerkQuestionIndex: Function;
  saveAnswer: Function;
  onSubmit: Function;
  questions: Array<Object>;
}

export default function Buttons({
  activePerkQuestionIndex,
  setActivePerkQuestionIndex,
  setQuestion,
  saveAnswer,
  onSubmit,
  questions,
}: Props) {
  function nextBtnClicked(e) {
    e.preventDefault();
    setQuestion(questions[activePerkQuestionIndex + 1]);
    setActivePerkQuestionIndex(activePerkQuestionIndex + 1);
    saveAnswer();
  }

  function prevBtnClicked(e) {
    e.preventDefault();
    setQuestion(questions[activePerkQuestionIndex - 1]);
    setActivePerkQuestionIndex(activePerkQuestionIndex - 1);
  }

  return (
    <Fragment>
      {activePerkQuestionIndex != 0 && (
        <button
          className="btn btn-outline-danger"
          onClick={(e) => prevBtnClicked(e)}
        >
          Previous
        </button>
      )}
      {/* when no more questions show progress perk btn instead */}
      {questions.length - 1 >= activePerkQuestionIndex ? (
        <button
          className="btn btn-outline-success"
          onClick={(e) => nextBtnClicked(e)}
        >
          Next
        </button>
      ) : (
        <button className="btn btn-outline-success" onClick={() => onSubmit}>
          Progress perk
        </button>
      )}
    </Fragment>
  );
}
