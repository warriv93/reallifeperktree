export type Perk = {
  level: number;
  title: string;
  image: string;
  description: string;
  questions: Array<Question>;
};

export type Question = {
  paragraph: string;
  type: QuestionType;
};
export enum QuestionType {
  "1-5",
  "input",
  "rarely-often",
}

export type User = {
  username: string;
  password: string;
};
