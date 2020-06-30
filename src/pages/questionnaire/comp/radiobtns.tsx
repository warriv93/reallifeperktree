import "../styles/radiobtn.scss";
import { useState, useEffect } from "react";

interface Props {
  labels: Array<String>;
  saveAnswer: Function;
  existingAnswer: number;
  questionID: number;
}

export default function radioButtons({
  labels,
  saveAnswer,
  existingAnswer,
  questionID,
}: Props) {
  const [checked, setChecked] = useState<number>(null);

  function handleChange(i: number) {
    console.log("Clicked", i);

    if (i == null || i == undefined) return;
    setChecked(i);
    saveAnswer(i);
  }

  useEffect(() => {
    console.log("existingAnswer: ", existingAnswer);

    //set existing answer or null
    setChecked(existingAnswer);
    // setcurrentanswer(existingAnswer ? existingAnswer.answer : null);
  }, [questionID]);

  return (
    <form className="container">
      {labels &&
        labels.map((label, index) => (
          <div
            className="radio-container"
            key={index}
            onClick={() => handleChange(index)}
          >
            <input
              className="radio"
              type="radio"
              checked={checked === index}
              name="abc"
              onChange={() => handleChange(index)}
              value=""
            />
            <label>{label}</label>
          </div>
        ))}
    </form>
  );
}
