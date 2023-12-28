import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  titleName: string;
}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  return (
    <Typography variant="h4" component="h2" gutterBottom style={{textAlign: 'center', paddingBottom: '20px'}}>
      {props.titleName}
    </Typography>
  );
};