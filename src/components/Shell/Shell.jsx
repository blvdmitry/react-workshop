import React from 'react';
import { ReactComponent as Logo } from "./logo.svg";
import s from "./Shell.module.css";

const Shell = (props) => {
  const { children } = props;

  return (
    <div className={s.root}>
      <div className={s.inner}>
        <div className={s.header}>
          <Logo />
        </div>

        <div className={s.content}>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Shell;
