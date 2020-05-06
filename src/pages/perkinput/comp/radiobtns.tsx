import "../styles/radiobtn.scss";
import { useState, useEffect } from "react";
type Props = {
  labels: Array<String>;
  settempanswer: Function;
  answer: any;
  questionID: number;
};

export default function radioButtons({
  labels,
  settempanswer,
  answer,
  questionID,
}: Props) {
  const [checked, setChecked] = useState([null, null]);

  function handleChange(i) {
    if (typeof i === "number") {
      setChecked([i, true]);
      settempanswer(i);
    }
  }

  useEffect(() => {
    // console.log("useEffect", answer);
    answer ? setChecked([answer.answer, true]) : setChecked([null, null]);
  }, [questionID]);

  return (
    <form className="container">
      {labels.map((label, index) => (
        <div
          className="radio-container"
          key={index}
          onClick={() => handleChange(index)}
        >
          <input
            className="radio"
            type="radio"
            checked={checked[0] == index ? checked[1] : null}
            name="abc"
            onChange={() => handleChange(index)}
            value={index}
          />
          <label>{label}</label>
        </div>
      ))}
    </form>
  );
}
