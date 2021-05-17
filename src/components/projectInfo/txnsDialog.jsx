/* eslint-disable react/forbid-prop-types */
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

const StyledDialogContent = withStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
  },
})(DialogContent);

const TxnsDialog = ({ setOpenTxnsDialog, txns, phone, mail }) => {
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
        position={position}
        from={txn.from}
        type={txn.type}
        money={txn.money}
        txnHash={txn.txnHash}
        description={txn.description}
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
            <a href="tel:+0905351083">{phone}</a>
          </div>
          <div>
            <MailIcon color="action" />
            <a href="mailto:kingkazma0112305@gmail.com">{mail}</a>
          </div>
        </div>
        <StyledDialogTitle id="title">交易紀錄</StyledDialogTitle>
        <StyledDialogContent id="content">
          <DialogContentText>
            {createTxnItems}
            {/* <TxnItem
              position="first"
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
              description=""
            />
            <TxnItem
              from="0x6635F83421Bf059cd8111f180f0727128685BaE4"
              type="sponsor"
              money="2"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description=""
            />
            <TxnItem
              from="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="1.22203"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description=""
            />
            <TxnItem
              from="0x6635F83421Bf059cd8111f180f0727128685BaE4"
              type="sponsor"
              money="0.391"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description=""
            />
            <TxnItem
              from="0x856608655f8b6932993fda56dda36db77c896269"
              type="sponsor"
              money="3.2"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description=""
            />
            <TxnItem
              from="0x6635F83421Bf059cd8111f180f0727128685BaE4"
              type="sponsor"
              money="7.8"
              txnHash="0xebcb4a6521e096d9e52c8b8185d77c9e8039aa406ffde65197b1c7d442e35427"
              description=""
            />
            <TxnItem
              position="last"
              from="成大桌遊社"
              type="create"
              money="0"
              txnHash="0x123createPro"
              description=""
            /> */}
          </DialogContentText>
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
  txns: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};

export default TxnsDialog;
