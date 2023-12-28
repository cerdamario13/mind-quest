import { Grid, Paper, styled } from '@mui/material';
import * as React from 'react';
import { Title } from './Title';

export const Categories: React.FunctionComponent = () => {
  
  const categories = [
    {key: 0, name: 'Random - Al Azar'},
    {key: 1, name: 'US History - Historia de EEUU'},
    {key: 2, name: 'Mexico Hsitory - Historia de Mexico'},
    {key: 3, name: 'World History - Historia del Mundo'},
    {key: 4, name: 'US Geography - Geografia de EEUU'},
    {key: 5, name: 'Mexico Geography - Geografia de Mexico'},
    {key: 6, name: 'World Geography - Geografia del Mundo'},
    {key: 7, name: 'Science - Ciencia'},
  ];
  
  const cats = categories.map((cat) => {
    return (
      <Grid key={cat.key} item xs={5} onClick={() => handleCatClick(cat)} style={{ cursor: 'pointer' }}>
        <Item>{cat.name}</Item>
      </Grid>
    )
  });
  
  const handleCatClick = (cat: any) => {
    console.log(cat);
  };
  
  return (
    <>
      <Title />
      <Grid container rowSpacing={5} columnGap={5} justifyContent="center">
        {cats}
      </Grid>
    </>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cdcfd1',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));