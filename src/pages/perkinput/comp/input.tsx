import "../styles/radiobtn.scss";
import { useEffect, useState } from "react";
type Props = {
  settempanswer: Function;
  questionID: number;
  answer: any;
  placeholder: string;
};

export default function radioButtons({
  settempanswer,
  answer,
  questionID,
  placeholder,
}: Props) {
  const [value, setValue] = useState();

  function handleChange(i) {
    if (typeof i === "number") {
      settempanswer(i);
    }
  }

  //TODO: FIXME: when clicking from an input -> input, the value carries over -

  useEffect(() => {
    // console.log("useEffect", answer);
    answer ? setValue(answer.answer) : setValue();
  }, [questionID]);

  return (
    <input
      type="number"
      className="form-control"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      defaultValue={value}
      autoFocus={true}
    />
  );
}
