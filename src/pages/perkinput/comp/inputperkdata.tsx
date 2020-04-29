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

  function typeOfQuestion(type: QuestionType) {
    switch (type) {
      case 0:
        break;

      default:
        return <div>1</div>;
    }
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
      {perk &&
        perk.questions.map((question) => {
          console.log(question);

          return (
            <div className="perk-card">
              <div className="left">
                <h3>{question.paragraph}</h3>
                {typeOfQuestion(QuestionType["scale1-10"])}
                <button className="btn btn-outline-danger">Previous</button>
                <button className="btn btn-outline-success">Next</button>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
}
