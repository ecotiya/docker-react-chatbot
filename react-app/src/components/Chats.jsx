import React from 'react'
import List from '@material-ui/core/List';
import {Chat} from './index'
import { makeStyles, createStyles } from '@material-ui/core/styles';

let useStyles = makeStyles(() => (
    createStyles({
      "chats": {
          height: 400,
          padding: '0',
          overflow: 'auto'
      }
    })
  ),
);

let Chats = (props) => {
  let classes = useStyles();

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </List>
  );
};

export default Chats
