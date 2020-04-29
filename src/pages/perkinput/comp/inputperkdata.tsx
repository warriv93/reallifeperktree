import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";
import { perkList } from "../../../api";
import { Perk as IPerk, QuestionType } from "../../../utils/types";

interface Props {
  urlperk: string | string[];
  perk?: IPerk;
}

export default function inputperkdata (props: Props) {
  let originPerk: IPerk = null;
  const [urlperk] = useState(props.urlperk)
  const [perk, setPerk] = useState(originPerk)


  useEffect(() => {
    // check values and type of urltitle 
    // iterate over perkList, if perk title = urlperk setPerk
    perkList && urlperk && typeof urlperk === "string" && perkList.map(perk => perk.title == urlperk && setPerk(perk))
  }, [perk, urlperk])

  function typeOfQuestion(type: QuestionType) {
    switch (type) {
      case 0:
        break;
    
      default:
        return (
          <div>
            1
          </div>
          )
    }
  }

  return (
    <Fragment>
      {perk &&
        perk.questions.map(question => {
          console.log(question)
          
          return (
            <div className="perk-card">
              <div className="left">
                <h3>{question.paragraph}</h3>
                {typeOfQuestion(QuestionType["scale1-10"])}
                <button className="btn btn-outline-danger">Previous</button>
                <button className="btn btn-outline-success">Next</button>
              </div>
            </div>
          )
        })
      }
    </Fragment>
  );
}
