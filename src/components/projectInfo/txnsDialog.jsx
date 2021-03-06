/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

import TxnItem from './txnItem';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Serif TC, serif',
  },
});

const StyledDialogTitle = withStyles({
  root: {
    color: '#555',
  },
})(DialogTitle);

const StyledDialogContent = withStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
  },
})(DialogContent);

const TxnsDialog = ({ setOpenTxnsDialog, exchangeRate, txns, phone, mail }) => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpenTxnsDialog(false);
    setOpen(false);
  };

  const createTxnItems = txns.map((txn, i) => {
    let position = 'middle';
    if (i === 0) position = 'first';
    else if (i === txns.length) position = 'last';
    return (
      <TxnItem
        key={txn.txnHash}
        exchangeRate={exchangeRate}
        position={position}
        from={txn.from}
        type={txn.type}
        money={txn.money}
        txnHash={txn.txnHash}
        description={txn.description}
        time={
          i === txns.length - 1
            ? dayjs(txn.time).format('YYYY/MM/DD')
            : txn.time
        }
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onBackdropClick={onClose}
        scroll="paper"
        aria-labelledby="title"
        aria-describedby="content"
      >
        <StyledDialogTitle id="title">聯絡方式</StyledDialogTitle>
        <div className={classNames('project-info-contact-container')}>
          <div>
            <CallIcon color="action" />
            <a href={`tel:+${phone}`}>{phone}</a>
          </div>
          <div>
            <MailIcon color="action" />
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
        </div>
        <StyledDialogTitle id="title">交易紀錄</StyledDialogTitle>
        <StyledDialogContent id="content">
          <DialogContentText>{createTxnItems}</DialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={onClose}>關閉</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

TxnsDialog.propTypes = {
  setOpenTxnsDialog: PropTypes.func.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  txns: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};

export default TxnsDialog;
