import React from 'react';
import s from './Transaction.module.css';

const Transaction = (props) => {
  const { title, amount } = props;

  return (
    <div className={s.root}>
      <span className={s.title}>{ title }</span>
      <span className={s.amount}>{ amount }</span>
    </div>
  );
};

export default Transaction;
