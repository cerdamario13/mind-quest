import * as React from 'react';
import Typography from '@mui/material/Typography';

export const Title: React.FunctionComponent = () => {
  return (
    <Typography variant="h4" component="h2" gutterBottom style={{textAlign: 'center', paddingBottom: '20px'}}>
      Categories - Categorias
    </Typography>
  );
};