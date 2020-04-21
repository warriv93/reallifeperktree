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
}
export enum QuestionType {"scale1-10",}


export type User = {
  id: number;
  username: string;
  password: string;
};
