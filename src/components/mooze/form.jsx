/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useFormik, Formik, Field, Form } from 'formik';
import { createMuiTheme, ThemeProvider, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import classNames from 'classnames';
import { create } from 'yup/lib/array';

const MoozeForm = () => {
  const initialValues = {
    name: '',
    owner: '',
    target: 0,
    email: '',
    phone: '',
    description: '',
  };

  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values));
    actions.resetForm({
      values: initialValues,
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Noto Serif TC, serif',
    },
  });

  return (
    <form
      className={classNames('form-container')}
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    >
      <div className={classNames('form-title')}>開始提案</div>
      <ThemeProvider theme={theme}>
        <TextField
          name="name"
          label="專案名稱"
          value={formik.values.name}
          onChange={formik.handleChange}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
        />
        <TextField
          name="owner"
          label="專案擁有者"
          value={formik.values.owner}
          onChange={formik.handleChange}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
        />
        <TextField
          name="target"
          label="目標金額"
          value={formik.values.target}
          onChange={formik.handleChange}
          variant="outlined"
          type="number"
          size="small"
          fullWidth
        />
        <TextField
          name="email"
          label="電子信箱"
          value={formik.values.email}
          onChange={formik.handleChange}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
        />
        <TextField
          name="phone"
          label="連絡電話"
          value={formik.values.phone}
          onChange={formik.handleChange}
          variant="outlined"
          type="tel"
          size="small"
          fullWidth
        />
        <TextField
          name="description"
          label="專案描述"
          value={formik.values.description}
          onChange={formik.handleChange}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
          multiline
        />
      </ThemeProvider>
      <div>
        <button type="submit" className={classNames('form-btn')}>
          提交
        </button>
        <button type="reset" className={classNames('form-btn')}>
          重設
        </button>
      </div>
    </form>
  );
};

export default MoozeForm;
