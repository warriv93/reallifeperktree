import "../styles/radiobtn.scss";
import { useState, useEffect } from "react";
type Iprops = {
  labels: Array<String>;
  settempanswer: Function;
  answer: any;
  questionID: number;
};
export default function radioButtons(props: Iprops) {
  const [checked, setChecked] = useState([null, null]);

  function handleChange(i) {
    if (i != false) {
      setChecked([i, true]);
      props.settempanswer(i);
    }
  }

  useEffect(() => {
    // console.log("useEffect", props.answer);
    props.answer
      ? setChecked([props.answer.answer, true])
      : setChecked([null, null]);
  }, [props.questionID]);

  return (
    <form className="container">
      {props.labels.map((label, index) => (
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
