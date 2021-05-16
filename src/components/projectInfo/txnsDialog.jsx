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
} from '@material-ui/core';

const TxnsDialog = ({ setOpenTxnsDialog }) => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpenTxnsDialog(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} aria-labelledby="title" aria-describedby="content">
      <DialogTitle id="title">title</DialogTitle>
      <DialogContent id="content">
        <DialogContentText>
          contentewfqqfwefewfwefwfwgegqregergeqgerherhq
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>close</Button>
      </DialogActions>
    </Dialog>
  );
};

TxnsDialog.propTypes = {
  setOpenTxnsDialog: PropTypes.func.isRequired,
};

export default TxnsDialog;
