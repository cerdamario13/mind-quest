import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from './Title';
import { Grid, Stack } from '@mui/material';
import { Item } from './Categories';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CachedIcon from '@mui/icons-material/Cached';
import { questionGeneration } from './questionGeneration';
import { QuestionCheck } from '../Dialogs/QestionCheck';

interface QuestionPageProps {
};

export const QuestionPage: React.FC<QuestionPageProps> = () => {
  
  const [currentCategoryState, setCurrentCategoryState] = React.useState('');
  
  React.useEffect(() => {
    //Set the current category
    setCurrentCategoryState(selectedCategory);
  }, []);
  
  const location = useLocation();
  const questionData = location.state.category;
  const navigate = useNavigate();
  const selectedCategory = location.state.currentCategory;
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState('');
  
  
  const choiceClick = (choice: string) => {
    //Check if the choice is correct
    if (choice.toString() === questionData.answer.toString()) {
      setOpen(true);
      setCheck('correct');
    } else {
      setOpen(true);
      setCheck('incorrect');
    }
  };
  
  // Shuffle the choices (Fisher-Yates shuffle)
  const shuffleArray = (array: string[]) =>{
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const choices = shuffleArray(questionData.choices.split(',').map((city: string) => city.trim())).map((city: string) => city.trim()).map((choice: string, idx: number) => {
    return (
      <Grid key={choice} item xs={5} style={{ cursor: 'pointer' }} onClick={() => choiceClick(choice)}>
          <Item>{`${idx+1}: ${choice}`}</Item>
      </Grid>
    )
  });
  
  const regenerateQuestion = () => {
    navigate('/question', { state: { category: questionGeneration(currentCategoryState) } });
  };
  
  const goToHomePage = () => {
    navigate('/');
  };
  
  return (
    <>
      <Title titleName={questionData.enQuestion} />
      <Title titleName={questionData.esQuestion} />
      
      <Grid container rowSpacing={5} columnGap={5} justifyContent="center">
        {choices}
      </Grid>
      
      <Stack direction="row" spacing={3} justifyContent="center" style={{padding: 10}}>
        <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} onClick={() => goToHomePage()} />
        <CachedIcon style={{ cursor: 'pointer' }} onClick={() => regenerateQuestion()} />
      </Stack>
      
      {
        open && <QuestionCheck open={open} setOpen={setOpen} check={check} />
      }
      
    </>
  );
};