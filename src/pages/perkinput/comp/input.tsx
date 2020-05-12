import "../styles/radiobtn.scss";
import { useEffect, useRef } from "react";

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
  const inputRef = useRef(null);

  function handleChange(i) {
    settempanswer(i);
  }

  useEffect(() => {
    inputRef.current.value = answer ? answer.answer : null;
  }, [questionID]);

  return (
    <input
      type="number"
      ref={inputRef}
      className="form-control"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={true}
    />
  );
}
