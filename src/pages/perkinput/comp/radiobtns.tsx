import "../styles/radiobtn.scss";
import { useState, useEffect } from "react";

interface Props {
  labels: Array<String>;
  setcurrentanswer: Function;
  existingAnswer: any;
  questionID: number;
}

export default function radioButtons({
  labels,
  setcurrentanswer,
  existingAnswer,
  questionID,
}: Props) {
  const [checked, setChecked] = useState(null);

  function handleChange(i) {
    if (typeof i === "number") {
      setChecked(i);
      setcurrentanswer(i);
    }
  }

  useEffect(() => {
    setChecked(existingAnswer ? existingAnswer.answer : null);
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
