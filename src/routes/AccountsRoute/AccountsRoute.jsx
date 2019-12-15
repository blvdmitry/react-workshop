import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmationActions } from '../../store/confirmation';
import useApi from '../../hooks/useApi';
import Account from '../../components/Account';
import Toast from '../../components/Toast';
import s from './AccountsRoute.module.css';
import Confirmation from "../../components/Confirmation";

const AccountsRoute = () => {
  const dispatch = useDispatch();
  const confirmationId = useSelector(state => {
    return state.confirmation.id;
  });
  const data = useApi('accounts');
  const [size, setSize] = React.useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  const handleTransfer = (item) => {
    dispatch(confirmationActions.show(item.id));
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!data) return <div className={s.loader}>Loading</div>;

  return (
    <React.Fragment>
      {
        data.map(item => (
          <div className={s.item} key={item.id}>
            <Account
              id={item.id}
              title={item.title}
              balance={`${item.amount} ${item.currency}`}
              accountNumber={item.iban}
              onTransfer={() => handleTransfer(item)}
            />
          </div>
        ))
      }

      { size < 540 && <Toast text="Now we're talking!" /> }
      { confirmationId && <Confirmation id={confirmationId} /> }
    </React.Fragment>
  );
};

export default AccountsRoute;
