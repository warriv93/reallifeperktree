import "../styles/radiobtn.scss";
import { useEffect, useState } from "react";

interface Props {
  saveAnswer: Function;
  questionID: number;
  existingAnswer: number;
  placeholder: string;
}

export default function radioButtons({
  saveAnswer,
  existingAnswer,
  questionID,
  placeholder,
}: Props) {
  const [value, setValue] = useState(null);

  function handleChange(i: number) {
    if (i == null || i == undefined) return;

    console.log(i, "asd");

    setValue(i);
    saveAnswer(i);
  }

  useEffect(() => {
    setValue(existingAnswer);
    // setcurrentanswer(existingAnswer ? existingAnswer.answer : null);
  }, [questionID]);

  return (
    <form className="container">
      <input
        type="number"
        className="form-control"
        onChange={(e) => handleChange(parseInt(e.target.value))}
        placeholder={placeholder}
        autoFocus={true}
        value={value || ""}
      />{" "}
    </form>
  );
}
