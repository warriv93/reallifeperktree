import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";
import { perkList } from "../../../api";
import { Perk as IPerk, QuestionType } from "../../../utils/types";

interface Props {
  urlperk: string | string[];
}

export default function inputperkdata({ urlperk }: Props) {
  let originPerk: IPerk;
  const [perk, setPerk] = useState(originPerk);

  useEffect(() => {
    // check values and type of urltitle
    // iterate over perkList, if perk title = urlperk setPerk
    if (perkList && urlperk && typeof urlperk === "string") {
      setPerk(perkList.filter((perk) => perk.title == urlperk)[0]);
    }
  }, [urlperk, perk]);

  function radioButtons(label: Array<String>) {
    let buttons = [];
    for (let index = 0; index < label.length; index++) {
      buttons.push(
        <Fragment>
          <label className="form-check-label">{label[index]}</label>
          <input className="form-check-input" type="radio" value={index} />
        </Fragment>
      );
    }
    return buttons;
  }

  function typeOfQuestion(type: QuestionType) {
    console.log(type);
    switch (type) {
      case 0:
        //   type: QuestionType["1-5"],
        return (
          <Fragment>
            <fieldset className="form-group">
              <div className="form-check">
                {radioButtons([
                  "Not at all",
                  "Not really",
                  "Maybe",
                  "Often",
                  "Absolutely",
                ])}
              </div>
            </fieldset>
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
            {radioButtons([
              "Not at all",
              "Very rarely",
              "Some times",
              "Often",
              "All the time",
            ])}
          </Fragment>
        );
      default:
        return <Fragment></Fragment>;
    }
  }

  function onSubmit(e) {}

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
      <form onSubmit={onSubmit}>
        {perk &&
          perk.questions.map((question) => {
            console.log(question);

            return (
              <div className="perk-card">
                <div className="left">
                  <h3>{question.paragraph}</h3>
                  <div className="question-type">
                    {typeOfQuestion(question.type)}
                  </div>
                  <button className="btn btn-outline-danger">Previous</button>
                  <button className="btn btn-outline-success">Next</button>
                </div>
              </div>
            );
          })}
      </form>
    </Fragment>
  );
}
