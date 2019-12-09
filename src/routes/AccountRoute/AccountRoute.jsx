import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchEndpoint } from '../../api';
import Transaction from '../../components/Transaction';
import s from './AccountRoute.module.css';

const AccountRoute = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchEndpoint('account', id)
      .then(data => setData(data));
  });

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
