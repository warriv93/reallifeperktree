import React, { Fragment } from "react";

interface Props {
  activePerkQuestionIndex: number;
  setActivePerkQuestionIndex: Function;
  saveAnswer: Function;
  submitFinalAnswers: Function;
  questionsLength: number;
}

export default function NavButtons({
  activePerkQuestionIndex,
  setActivePerkQuestionIndex,
  submitFinalAnswers,
  questionsLength,
}: Props) {
  function nextBtnClicked(e) {
    e.preventDefault();
    setActivePerkQuestionIndex((oldIndex) => oldIndex + 1);
  }

  function prevBtnClicked(e) {
    e.preventDefault();
    setActivePerkQuestionIndex((oldIndex) => oldIndex - 1);
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
      {questionsLength - 1 == activePerkQuestionIndex ? (
        <button
          className="btn btn-outline-success"
          onClick={() => submitFinalAnswers()}
        >
          Progress perk
        </button>
      ) : (
        <button
          className="btn btn-outline-success"
          onClick={(e) => nextBtnClicked(e)}
        >
          Next
        </button>
      )}
    </Fragment>
  );
}
