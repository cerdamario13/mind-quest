
var questionDataStorage = JSON.parse(localStorage.getItem('projects/mindQuest/questionData') || '[]');

export const questionGeneration = (category: string) => {
  //get the questions using the category from the data
  var dataArray = questionDataStorage.filter((obj: questionDataProps) => obj.sheetName == category);
  var questions = dataArray[0].questions;
  
  //randomly select one question from the questions array
  const random = Math.floor(Math.random() * questions.length);
  return questions[random];
};

interface questionDataProps {
  sheetName: string;
  questions: Array<Object>;
}