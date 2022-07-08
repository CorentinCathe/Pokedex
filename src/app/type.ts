/* eslint-disable @typescript-eslint/naming-convention */
export type Questions = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Answer = {
  value: string;
  isCorrect: boolean;
};

export type Category = {
  id: number;
  name: string;
};
