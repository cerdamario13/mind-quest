import { Button, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Title } from './Title';
import { questionGeneration } from './questionGeneration';
import { useNavigate } from 'react-router-dom';
import readExcelFile from '../data/readExcelData';

export const Categories: React.FunctionComponent = () => {
  
  const navigate = useNavigate();
  const [questionData, setQuestionData] = React.useState<any[]>([]);
  const [categories, setCategories] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    if (questionData.length) {
      var catTest = questionData[0].questions.map((cat: any, idx: number) => {
        return {key: idx, name: cat.Name, category: cat.category}
      });
      
      //Add a random category to the array at the beginning
      catTest.unshift({key: -1, name: 'Random - Al Azar', category: 'random'});
      
      setCategories(catTest);
    }
  }, [questionData]);
    
  
  const cats = categories.map((cat) => {
    return (
      <Grid key={cat.key} item xs={5} onClick={() => handleCatClick(cat)} style={{ cursor: 'pointer' }}>
        <Item>{cat.name}</Item>
      </Grid>
    )
  });
  
  const handleCatClick = (cat: any) => {
    //navigate to question page with category as "props"
    navigate('/question', { state: { category: questionGeneration(cat.category), currentCategory: cat.category } });
  };
  
  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      // Call the function to read the Excel file here
      readExcelFile(file)
      .then((data) => {
        setQuestionData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };
  
  return (
    <>
      <Title titleName='Categories - Categorias' />
      
      <Grid container rowSpacing={5} columnGap={5} justifyContent="center">
        {cats.length == 0 ? (
          <Grid item xs={5} style={{ cursor: 'pointer' }}>
            <Item>Load File to begin</Item>
          </Grid>
        ) : (
          cats
        )}
      </Grid>
      
      <Stack sx={{ paddingTop: 10, alignItems: 'center'}}>
        <Button
          variant="outlined"
          style={{ width: '500px'}}
        >
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
        </Button>
      </Stack>
    </>
  );
};

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cdcfd1',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));