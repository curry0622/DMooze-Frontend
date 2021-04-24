import React from 'react';
import classNames from 'classnames';

const Form = () => (
  <div className={classNames('form-container')}>
    <div className={classNames('form-title')}>Start Your Mooze</div>
    <div>Project Name</div>
    <input type="text" />
    <div>Owner Name</div>
    <input type="text" />
    <div>Email</div>
    <input type="text" />
    <div>Phone</div>
    <input type="text" />
    <div>Project Description</div>
    <textarea />
  </div>
);

export default Form;
