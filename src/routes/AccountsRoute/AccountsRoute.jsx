import React from 'react';
import { fetchEndpoint } from '../../api';
import Account from '../../components/Account';
import Toast from '../../components/Toast';
import Confirmation from '../../components/Confirmation';
import s from './AccountsRoute.module.css';

const AccountsRoute = () => {
  const [data, setData] = React.useState([]);
  const [size, setSize] = React.useState(window.innerWidth);
  const [transferId, setTransferId] = React.useState(null);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  const handleConfirmationFinish = () => {
    setTransferId(null);
  };

  const handleTransfer = (item) => {
    setTransferId(item.id);
  };

  React.useEffect(() => {
    fetchEndpoint('accounts').then(data => setData(data));
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!data.length) return <div className={s.loader}>Loading</div>;

  return (
    <React.Fragment>
      {
        data.map(item => (
          <div className={s.item} key={item.id}>
            <Account
              id={item.id}
              title={item.title}
              balance={` ${item.amount} ${item.currency}`}
              accountNumber={item.iban}
              onTransfer={() => handleTransfer(item)}
            />
          </div>
        ))
      }

      { size < 540 && <Toast text="Now we're talking!" /> }
      { !!transferId && <Confirmation onFinish={handleConfirmationFinish} key={transferId} /> }
    </React.Fragment>
  );
};

export default AccountsRoute;
