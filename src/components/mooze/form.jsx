import React from 'react';
import { Formik, Field, Form } from 'formik';
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

  return (
    <Formik initialValues={initialValues}>
      <Form className={classNames('form-container')}>
        <div className={classNames('form-title')}>Start Your Mooze</div>
        <Field name="name" type="text" placeholder="name" />
        <Field name="owner" type="text" placeholder="owner" />
        <Field name="target" type="number" placeholder="target" />
        <Field name="email" type="email" placeholder="email" />
        <Field name="phone" type="tel" placeholder="phone" />
        <Field name="description" as="textarea" placeholder="description" />
      </Form>
    </Formik>
  );
};

export default MoozeForm;
