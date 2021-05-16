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
  withStyles,
} from '@material-ui/core';

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

const TxnsDialog = ({ setOpenTxnsDialog }) => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpenTxnsDialog(false);
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        scroll="paper"
        aria-labelledby="title"
        aria-describedby="content"
      >
        <StyledDialogTitle id="title">交易紀錄</StyledDialogTitle>
        <DialogContent id="content">
          <DialogContentText>
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="withdraw"
              money="7"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description="用於海報製作"
            />
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="withdraw"
              money="3"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description="用於設計部人力薪資"
            />
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="withdraw"
              money="2"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description="用於工程部人力薪資"
            />
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="3"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="2"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="8"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              addr="0x856608655f8b6932993fda56dda36db77c896269"
              type="create"
            />
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
