import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';

const StyledListItem = withStyles({
  root: {
    padding: '5px',
    paddingRight: '10px',
    margin: '10px 0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
    '&:active': {
      backgroundColor: '#edeae9',
    },
  },
})(ListItem);

const StyledListItemText = withStyles({
  root: {
    color: '#555',
  },
})(ListItemText);

const firstItemStyle = {
  marginTop: 0,
};

const lastItemStyle = {
  marginBottom: 0,
};

const TxnItem = ({ position, from, type, money, txnHash, description }) => {
  const getAvatar = () => {
    switch (type) {
      default: {
        return '';
      }
      case 'create': {
        return <WhatshotRoundedIcon />;
      }
      case 'sponsor': {
        return <SendRoundedIcon fontSize="small" />;
      }
      case 'withdraw': {
        return <AttachMoneyRoundedIcon />;
      }
    }
  };

  const getType = () => {
    switch (type) {
      default: {
        return '';
      }
      case 'create': {
        return '創建了此專案';
      }
      case 'sponsor': {
        return '贊助了';
      }
      case 'withdraw': {
        return '提領了';
      }
    }
  };

  const getItemStyle = () => {
    switch (position) {
      default: {
        return {};
      }
      case 'first': {
        return firstItemStyle;
      }
      case 'last': {
        return lastItemStyle;
      }
    }
  };

  return (
    <StyledListItem
      onClick={() =>
        window
          .open(`https://rinkeby.etherscan.io/tx/${txnHash}`, '_blank')
          .focus()
      }
      style={getItemStyle()}
    >
      <ListItemAvatar>
        <Avatar>{getAvatar()}</Avatar>
      </ListItemAvatar>
      <StyledListItemText
        primary={from}
        secondary={`${getType()} ${
          money !== 0 ? `NT$ ${money}` : ''
        } ${description}`}
      />
    </StyledListItem>
  );
};

TxnItem.propTypes = {
  position: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  txnHash: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TxnItem;
