import React from 'react';
import s from './Toast.module.css';

const Toast = (props) => {
  const { text } = props;

  return <div className={s.root}>{ text }</div>;
};

export default Toast;
