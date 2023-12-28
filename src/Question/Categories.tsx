import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Title } from './Title';
import { questionGeneration } from './questionGeneration';
import { useNavigate } from 'react-router-dom';

export const Categories: React.FunctionComponent = () => {
  
  const navigate = useNavigate();
  
  const categories = [
    {key: 0, name: 'Random - Al Azar', category: "random"},
    {key: 1, name: 'US History - Historia de EEUU', category: "usHistory"},
    {key: 2, name: 'Mexico Hsitory - Historia de Mexico', category: "mexicoHistory"},
    // {key: 3, name: 'World History - Historia del Mundo'},
    // {key: 4, name: 'US Geography - Geografia de EEUU'},
    // {key: 5, name: 'Mexico Geography - Geografia de Mexico'},
    // {key: 6, name: 'World Geography - Geografia del Mundo'},
    // {key: 7, name: 'Science - Ciencia'},
  ];
  
  const cats = categories.map((cat) => {
    return (
      <Grid key={cat.key} item xs={5} onClick={() => handleCatClick(cat)} style={{ cursor: 'pointer' }}>
        <Item>{cat.name}</Item>
      </Grid>
    )
  });
  
  const handleCatClick = (cat: any) => {
    //navigate to question page with category as "props"
    navigate('/question', { state: { category: questionGeneration(cat.category) } });
  };
  
  return (
    <>
      <Title titleName='Categories - Categorias' />
      <Grid container rowSpacing={5} columnGap={5} justifyContent="center">
        {cats}
      </Grid>
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