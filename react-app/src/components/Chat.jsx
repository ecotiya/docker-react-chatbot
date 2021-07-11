import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Onushi from '../assets/img/onushi.jpg'
import Ecotiya from '../assets/img/ecotiya.jpg'

const Chat = (props) => {
  let isQuestion = (props.type === 'question');
  let classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className = {classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Ecotiya} />
        ) : (
          <Avatar alt="icon" src={Onushi} />
        )}
      </ListItemAvatar>
      <div className = "p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
