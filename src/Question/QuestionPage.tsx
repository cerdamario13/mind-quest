import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from './Title';
import { Grid } from '@mui/material';
import { Item } from './Categories';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

interface QuestionPageProps {
}

export const QuestionPage: React.FC<QuestionPageProps> = () => {
  
  const location = useLocation();
  const category = location.state.category;
  console.log(category);
  
  const choiceClick = (choice: any) => {
    //Check if the choice is correct
    if (choice === category.answer) {
      console.log(choice);
    };
  };
  
  const choices = category.choices.map((choice: any) => {
    return (
      <Grid key={choice} item xs={5} style={{ cursor: 'pointer' }} onClick={() => choiceClick(choice)}>
        <Item>{choice}</Item>
      </Grid>
    )
  });
  
  return (
    <>
      <Title titleName={category.enQuestion} />
      <Title titleName={category.esQuestion} />
      
      <Grid container rowSpacing={5} columnGap={5} justifyContent="center">
        {choices}
      </Grid>
      
      <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} onClick={() => window.history.back()} />
      
    </>
  );
};