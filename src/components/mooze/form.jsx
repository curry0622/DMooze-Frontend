/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import dayjs from 'dayjs';
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  InputAdornment,
} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import Web3Context from '../../contexts/web3Context';
import getUniqueId from '../../apis/getUniqueId';
import createProject from '../../apis/createProject';
import uploadImages from '../../apis/uploadImages';
import getEth2Twd from '../../utils/getEth2Twd';

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
    '& .MuiFormHelperText-root': {
      marginTop: 0,
    },
  },
})(TextField);

const StyledButton = withStyles({
  root: {
    color: '#555',
  },
})(Button);

const MoozeForm = () => {
  const {
    web3,
    getWeb3Instance,
    accounts,
    getAccountsInstance,
    contract,
    getContractInstance,
  } = useContext(Web3Context);
  const [imgArr, setImgArr] = useState(new FormData());
  const [cnt, setCnt] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);

  const initialValues = {
    name: '',
    owner: '',
    target: 0,
    email: '',
    phone: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('??????'),
    owner: Yup.string().required('??????'),
    target: Yup.number('????????????').required('??????'),
    email: Yup.string().email('????????????'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, '????????????')
      .min(10, '????????????')
      .max(10, '????????????'),
  });

  const resetImages = () => {
    setImgArr([]);
    setCnt(0);
  };

  const onSubmit = async (values, actions) => {
    if (!web3) {
      getWeb3Instance();
      return;
    }
    setIsLoading(true);
    const id = await getUniqueId();
    try {
      const { transactionHash } = await contract.methods
        .create(id, dayjs().unix())
        .send({ from: accounts[0] });
      await createProject(true, id, {
        owner_addr: accounts[0],
        target_price: values.target,
        project_description: values.description,
        project_name: values.name,
        representative: values.owner,
        email: values.email,
        phone: values.phone,
        create_hash: transactionHash,
        start_time: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
      });
      uploadImages(id, imgArr);
    } catch (e) {
      alert(e.message);
      await createProject(false, id, {});
    }
    actions.resetForm({
      values: initialValues,
    });
    resetImages();
    setIsLoading(false);
  };

  const onUpload = (e) => {
    const images = Object.values(e.target.files);
    let imgCnt = 0;
    images.forEach((img) => {
      imgCnt += 1;
      imgArr.append('image_files', img);
    });
    setCnt(imgCnt);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(async () => {
    if (web3 !== undefined) {
      await getAccountsInstance();
      await getContractInstance();
    }
  }, [web3]);

  useEffect(async () => setExchangeRate(await getEth2Twd()), []);

  return (
    <form
      className={classNames('mooze-form-container')}
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      disabled={isLoading}
    >
      <div className={classNames('mooze-form-title')}>????????????</div>
      <ThemeProvider theme={theme}>
        <StyledTextField
          name="name"
          label="????????????"
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
          label="???????????????"
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
          label={`???????????? ${
            formik.values.target != 0
              ? `NT$ ${(formik.values.target * exchangeRate).toFixed(0)}`
              : ''
          }`}
          value={formik.values.target}
          onChange={formik.handleChange}
          error={formik.touched.owner && Boolean(formik.errors.owner)}
          helperText={formik.touched.owner && formik.errors.owner}
          variant="outlined"
          type="number"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Eth</InputAdornment>
            ),
          }}
        />
        <StyledTextField
          name="email"
          label="????????????"
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
          label="????????????"
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
          label="????????????"
          value={formik.values.description}
          onChange={formik.handleChange}
          variant="outlined"
          type="text"
          size="small"
          rowsMax="4"
          fullWidth
          multiline
        />
      </ThemeProvider>
      <div className={classNames('mooze-form-btn-container')}>
        <label className={classNames('mooze-form-upload')} htmlFor="upload">
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={onUpload}
            style={{ display: 'none' }}
            multiple
          />
          <StyledButton
            variant="outlined"
            component="span"
            startIcon={<ImageOutlinedIcon />}
          >
            ?????? {cnt !== 0 && cnt}
          </StyledButton>
        </label>
        <StyledButton
          type="submit"
          variant="outlined"
          startIcon={<ArrowUpwardOutlinedIcon />}
        >
          ??????
        </StyledButton>
        <StyledButton
          type="reset"
          variant="outlined"
          startIcon={<ReplayIcon />}
          onClick={resetImages}
        >
          ??????
        </StyledButton>
      </div>
      <Snackbar
        open={isLoading}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message="???????????????..."
        action={<CircularProgress color="inherit" size="18px" />}
      />
    </form>
  );
};

export default MoozeForm;
