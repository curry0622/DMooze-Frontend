/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
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
} from '@material-ui/core';

import TxnItem from './txnItem';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Serif TC, serif',
  },
});

const TxnsDialog = ({ setOpenTxnsDialog }) => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpenTxnsDialog(false);
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} aria-labelledby="title" aria-describedby="content">
        <DialogTitle id="title">交易紀錄</DialogTitle>
        <DialogContent id="content">
          <DialogContentText>
            <TxnItem />
            <TxnItem />
            <TxnItem />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>關閉</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

TxnsDialog.propTypes = {
  setOpenTxnsDialog: PropTypes.func.isRequired,
};

export default TxnsDialog;
