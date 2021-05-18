/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core';

import getEth2Twd from '../../utils/getEth2Twd';

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

const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#555',
      fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#555',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {},
      '&:hover fieldset': {
        borderColor: '#555',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#555',
      },
    },
    '& .MuiFormHelperText-root': {
      marginTop: 0,
    },
  },
})(TextField);

const WithdrawDialog = ({
  setOpenWithdrawDialog,
  onConfirmWithdraw,
  withdrawn,
  left,
}) => {
  const [open, setOpen] = useState(true);
  const [money, setMoney] = useState(0);
  const [description, setDescription] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);

  const onClose = () => {
    setOpen(false);
    setOpenWithdrawDialog(false);
  };

  const onSend = async () => {
    onConfirmWithdraw(money, description);
    onClose();
  };

  useEffect(async () => setExchangeRate(await getEth2Twd()), []);

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onBackdropClick={onClose}
        aria-labelledby="title"
        aria-describedby="content"
      >
        <StyledDialogTitle id="title">
          提領 {money != 0 ? `${(money * exchangeRate).toFixed(0)} 元` : ''}
        </StyledDialogTitle>
        <DialogContent id="content" style={{ overflow: 'hidden' }}>
          <DialogContentText>
            專案已結束募款階段
            <br />
            擁有者可開始提領款項，並註記每筆款項的詳細用途
            <br />
            目前已提領 {withdrawn.toFixed(0)} 元，剩餘 {left.toFixed(0)} 元
          </DialogContentText>
          <StyledTextField
            label="Eth"
            type="number"
            variant="outlined"
            size="small"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            style={{
              width: '120px',
              marginTop: '10px',
            }}
          />
          <StyledTextField
            label="用途"
            type="text"
            variant="outlined"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              marginLeft: '10px',
              marginTop: '10px',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>取消</Button>
          <Button
            onClick={onSend}
            disabled={
              money * exchangeRate <= 0 ||
              description === '' ||
              money * exchangeRate > left
            }
          >
            送出
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

WithdrawDialog.propTypes = {
  setOpenWithdrawDialog: PropTypes.func.isRequired,
  onConfirmWithdraw: PropTypes.func.isRequired,
  withdrawn: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};

export default WithdrawDialog;
