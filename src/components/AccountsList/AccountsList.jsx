import React from 'react';
import { fetchEndpoint } from '../../api';
import Account from '../Account';
import Toast from '../Toast';
import Confirmation from '../Confirmation';
import s from './AccountsList.module.css';

const AccountsList = () => {
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

export default AccountsList;
