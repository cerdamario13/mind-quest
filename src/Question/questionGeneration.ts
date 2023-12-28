import { usHistoryQuestions } from "../data/usQuestions";
import { mexHistoryQuestions } from "../data/mexQuestions";

const getQuestions = (category: string) => {
  //Get the question data from the appropriate file based on the category
  if (category === "usHistory") {
    return usHistoryQuestions;
  } else if (category === "mexicoHistory") {
    return mexHistoryQuestions;
  } else {
    //return a random selection
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return usHistoryQuestions;
    } else {
      return mexHistoryQuestions;
    }
  }
};

export const questionGeneration = (category: string) => {
  var questions = getQuestions(category);
  //randomly select one question from the questions array
  const random = Math.floor(Math.random() * questions.length);
  return questions[random];
};