import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Transaction from '../../components/Transaction';
import s from './AccountRoute.module.css';

const AccountRoute = () => {
  const { id } = useParams();
  const history = useHistory();
  const data = useApi('account', id);

  const handleBackClick = () => {
    history.goBack();
  };

  if (!data) return null;

  return (
    <React.Fragment>
      <div className={s.header}>
        <h1 className={s.title}>{ data.title }</h1>
        <button type="button" className={s.link} onClick={handleBackClick}>Back</button>
      </div>

      {
        data.transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
          />
        ))
      }
    </React.Fragment>
  );
};

export default AccountRoute;
