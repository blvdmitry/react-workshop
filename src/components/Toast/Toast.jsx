import React from 'react';
import classnames from 'classnames';
import s from './Toast.module.css';

class Toast extends React.Component {
  render() {
    const { active, text } = this.props;
    const rootClassName = classnames(s.root, active && s.rootActive);

    return <div className={rootClassName}>{ text }</div>;
  }
}

export default Toast;
