import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from './Title';
import { Grid, Stack } from '@mui/material';
import { Item } from './Categories';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CachedIcon from '@mui/icons-material/Cached';
import { questionGeneration } from './questionGeneration';

interface QuestionPageProps {
};

export const QuestionPage: React.FC<QuestionPageProps> = () => {
  
  const location = useLocation();
  const category = location.state.category;
  const navigate = useNavigate();
  const currentCategory = location.state.currentCategory;
  
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
  
  const regenerateQuestion = () => {
    navigate('/question', { state: { category: questionGeneration(currentCategory) } });
  };
  
  const goToHomePage = () => {
    navigate('/');
  };
  
  return (
    <>
      <Title titleName={category.enQuestion} />
      <Title titleName={category.esQuestion} />
      
      <Grid container rowSpacing={5} columnGap={5} justifyContent="center">
        {choices}
      </Grid>
      
      <Stack direction="row" spacing={3} justifyContent="center" style={{padding: 10}}>
        <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} onClick={() => goToHomePage()} />
        <CachedIcon style={{ cursor: 'pointer' }} onClick={() => regenerateQuestion()} />
      </Stack>
      
    </>
  );
};