import { Button, Dialog, DialogActions, DialogContent, Slide, Stack } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface QuestionCheckProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  check: string;
};

export const QuestionCheck: React.FC<QuestionCheckProps> = (props) => {
  
  const navigate = useNavigate();
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const handleClose = () => {
    props.setOpen(false);
  };
  
  const goToHomePage = () => {
    props.setOpen(false);
    navigate('/');
    
  };
  
  return (
    <>
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}>
        
      <DialogContent>
          <Stack direction="row" justifyContent="center">
            {
              props.check === 'correct' ? (
                <>
                  <h1>Correct</h1>
                  <CheckIcon fontSize='large' color={'success'}/>                                  
                </>
              ) : (
                <>
                  <h1>Incorrect</h1>
                  <CloseIcon fontSize='large' color={'error'}/>
                </>
              )
            }     
          </Stack>
      </DialogContent>      
      
      <DialogActions>
        <Button onClick={() => props.setOpen(false)}>Close</Button>
        <Button onClick={() => goToHomePage()}>Next</Button>
      </DialogActions>
      
    </Dialog>
    </>
  );
};