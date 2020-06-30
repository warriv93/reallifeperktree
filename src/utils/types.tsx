export interface Perk {
  id: string;
  level: number;
  title: string;
  image: string;
  description: string;
  questions: Array<Question>;
}

export interface Question {
  paragraph: string;
  type: QuestionType;
  placeholder?: string;
  section?: string;
}

export enum QuestionType {
  "1-5",
  "input",
  "rarely-often",
}

export interface User {
  username: string;
  password: string;
}
