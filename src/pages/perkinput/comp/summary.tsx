import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  answers: any[];
};

export default function summary({ answers }: Props) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    calculateScore();
  }, []);

  function calculateScore() {
    let newScore = 0;

    answers.map((answer, index) => {
      newScore = newScore + answer.answer;
    });
    console.log(score, newScore);

    newScore = Math.round(newScore / answers.length);
    setScore(newScore);
  }

  return (
    <div className="perk-card">
      <h3>Summary score: {score}</h3>
      {answers.map((answer, index) => {
        return <p>{answer.answer}</p>;
      })}
      <Link href="/perktree">
        <a className="btn btn-success"> Start progressing</a>
      </Link>
    </div>
  );
}
