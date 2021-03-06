import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    "button": {
      borderColor: '#00ff7f',
      color: '#00ff7f',
      fontWeight: 600,
      marginBottom: '8px',
      "&:hover": {
        backgroundColor: '#00ff7f',
        color: '#fff'
      }
    },
  }),
);

const Answer = (props) => {
  let classes = useStyles();
  return (
    <Button
        className = {classes.button}
        variant="outlined" onClick = {() => props.select(props.content, props.nextId)}
      >
      {props.content}
    </Button>
  )
}

export default Answer;
