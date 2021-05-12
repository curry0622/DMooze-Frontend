/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useFormik } from 'formik';
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
  TextField,
} from '@material-ui/core';
import * as Yup from 'yup';
import classNames from 'classnames';

const MoozeForm = () => {
  const initialValues = {
    name: '',
    owner: '',
    target: 0,
    email: '',
    phone: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('必填'),
    owner: Yup.string().required('必填'),
    target: Yup.number('格式錯誤').required('必填'),
    email: Yup.string().email('格式錯誤').required('必填'),
    phone: Yup.string()
      .required('必填')
      .matches(/^[0-9]+$/, '格式錯誤')
      .min(10, '格式錯誤')
      .max(10, '格式錯誤'),
  });

  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values));
    actions.resetForm({
      values: initialValues,
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Noto Serif TC, serif',
    },
  });

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
    },
  })(TextField);

  return (
    <form
      className={classNames('mooze-form-container')}
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    >
      <div className={classNames('mooze-form-title')}>開始提案</div>
      <ThemeProvider theme={theme}>
        <StyledTextField
          name="name"
          label="專案名稱"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
        />
        <StyledTextField
          name="owner"
          label="專案擁有者"
          value={formik.values.owner}
          onChange={formik.handleChange}
          error={formik.touched.owner && Boolean(formik.errors.owner)}
          helperText={formik.touched.owner && formik.errors.owner}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
        />
        <StyledTextField
          name="target"
          label="目標金額"
          value={formik.values.target}
          onChange={formik.handleChange}
          error={formik.touched.owner && Boolean(formik.errors.owner)}
          helperText={formik.touched.owner && formik.errors.owner}
          variant="outlined"
          type="number"
          size="small"
          fullWidth
        />
        <StyledTextField
          name="email"
          label="電子信箱"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="outlined"
          type="text"
          size="small"
          fullWidth
        />
        <StyledTextField
          name="phone"
          label="連絡電話"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          variant="outlined"
          type="tel"
          size="small"
          fullWidth
        />
        <StyledTextField
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
        <button type="submit" className={classNames('mooze-form-btn')}>
          提交
        </button>
        <button type="reset" className={classNames('mooze-form-btn')}>
          重設
        </button>
      </div>
    </form>
  );
};

export default MoozeForm;
