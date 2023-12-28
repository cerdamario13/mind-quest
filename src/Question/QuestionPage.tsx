import * as React from 'react';
import { useLocation } from 'react-router-dom';

interface QuestionPageProps {
}

export const QuestionPage: React.FC<QuestionPageProps> = () => {
  const location = useLocation();
  const category = location.state.category;
  console.log(category);
  return (
    <>
      Hello...
    </>
  );
};