import React from 'react';
import {
  withStyles,
  IconButton,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import InsertLinkRoundedIcon from '@material-ui/icons/InsertLinkRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const StyledListItem = withStyles({
  root: {
    padding: 0,
    margin: '10px 0',
  },
})(ListItem);

const TxnItem = () => (
  <StyledListItem>
    <ListItemAvatar>
      <Avatar>
        <SendRoundedIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary="0xqqpl9102di109u398h2193h81gj312n3910nqin..."
      secondary="5 Eth"
    />
    {/* <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete">
        <InsertLinkRoundedIcon />
      </IconButton>
    </ListItemSecondaryAction> */}
  </StyledListItem>
);

export default TxnItem;
