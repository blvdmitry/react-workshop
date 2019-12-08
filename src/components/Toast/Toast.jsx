import React from 'react';
import s from './Toast.module.css';

class Toast extends React.Component {
  render() {
    const { text } = this.props;

    return <div className={s.root}>{ text }</div>;
  }
}

export default Toast;
