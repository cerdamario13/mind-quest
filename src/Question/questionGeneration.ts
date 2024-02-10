
var questionDataStorage = JSON.parse(localStorage.getItem('projects/mindQuest/questionData') || '[]');

export const questionGeneration = (category: string) => {
  //get the questions using the category from the data
  if (category == 'random') {
    const allQuestions = questionDataStorage.reduce((acc: any, item: any) => {
      //if the sheetName is not Categories, then add the questions to the accumulator
      if (item.sheetName !== 'Categories') {
        return acc.concat(item.questions);
      };
      return acc; //should always return the accumulator (acc), even if the if condition is not met
    }, []);
        
    //randomly select one question from the questions array
    const random = Math.floor(Math.random() * allQuestions.length);
    return allQuestions[random];
  } else {
    
    var dataArray = questionDataStorage.filter((obj: questionDataProps) => obj.sheetName === category);
    var questions = dataArray[0].questions;
    
    //randomly select one question from the questions array
    const random = Math.floor(Math.random() * questions.length);
    return questions[random];
    
  }
  
};

interface questionDataProps {
  sheetName: string;
  questions: Array<Object>;
}