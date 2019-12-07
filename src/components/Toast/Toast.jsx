import React from 'react';
import classnames from 'classnames';
import s from './Toast.module.css';

const Toast = (props) => {
  const { active, text } = props;
  const rootClassName = classnames(s.root, active && s.rootActive);

  return <div className={rootClassName}>{ text }</div>;
};

export default Toast;
