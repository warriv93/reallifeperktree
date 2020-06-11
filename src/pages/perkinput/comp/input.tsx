import "../styles/radiobtn.scss";
import { useEffect, useState } from "react";

interface Props {
  settempanswer: Function;
  questionID: number;
  answer: any;
  placeholder: string;
}

export default function radioButtons({
  settempanswer,
  answer,
  questionID,
  placeholder,
}: Props) {
  const [value, setValue] = useState(null);

  function handleChange(i) {
    settempanswer(i);
  }

  useEffect(() => {
    setValue(answer ? answer.answer : null);
  }, [questionID]);

  return (
    <input
      type="number"
      className="form-control"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={true}
      value={value}
    />
  );
}
