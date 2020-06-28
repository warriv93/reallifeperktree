import "../styles/radiobtn.scss";
import { useEffect, useState } from "react";

interface Props {
  setcurrentanswer: Function;
  questionID: number;
  existingAnswer: any;
  placeholder: string;
}

export default function radioButtons({
  setcurrentanswer,
  existingAnswer,
  questionID,
  placeholder,
}: Props) {
  const [value, setValue] = useState(null);

  function handleChange(i) {
    console.log("ainput", i);

    setValue(i);
    setcurrentanswer(i);
  }

  useEffect(() => {
    setValue(existingAnswer ? existingAnswer.answer : null);
    setcurrentanswer(existingAnswer ? existingAnswer.answer : "");
  }, [questionID]);

  return (
    <input
      type="number"
      className="form-control"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={true}
      value={value || ""}
    />
  );
}
