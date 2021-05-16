import React, { useState } from 'react';
import classNames from 'classnames';
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
        onBackdropClick={onClose}
        scroll="paper"
        aria-labelledby="title"
        aria-describedby="content"
      >
        <StyledDialogTitle id="title">聯絡方式</StyledDialogTitle>
        <div className={classNames('project-info-contact-container')}>
          <div>
            <CallIcon color="action" />
            <a href="tel:+0905351083">0905351083</a>
          </div>
          <div>
            <MailIcon color="action" />
            <a href="mailto:kingkazma0112305@gmail.com">
              kingkazma0112305@gmail.com
            </a>
          </div>
        </div>
        <StyledDialogTitle id="title">交易紀錄</StyledDialogTitle>
        <DialogContent id="content">
          <DialogContentText>
            <TxnItem
              from="成大桌遊社"
              type="withdraw"
              money="0.1"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description="使用於設計部人力薪資"
            />
            <TxnItem
              from="成大桌遊社"
              type="withdraw"
              money="4.9"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description="使用於工程部人力薪資"
            />
            <TxnItem
              from="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="3"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              from="0x6635F83421Bf059cd8111f180f0727128685BaE4"
              type="sponsor"
              money="2"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              from="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="1.22203"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              from="0x6635F83421Bf059cd8111f180f0727128685BaE4"
              type="sponsor"
              money="0.391"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              from="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="3.2"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem
              from="0x6635F83421Bf059cd8111f180f0727128685BaE4"
              type="sponsor"
              money="7.8"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
            />
            <TxnItem from="成大桌遊社" type="create" />
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
