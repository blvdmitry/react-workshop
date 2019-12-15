import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { AnalyticsContext } from '../Analytics';
import s from './Account.module.css';

const Account = (props) => {
  const { title, accountNumber, balance, onTransfer, id } = props;
  const [active, setActive] = React.useState(false);
  const { sendClick } = React.useContext(AnalyticsContext);
  const rootClassName = classnames(s.root,  active && s.rootActive);

  const handleClick = () => {
    setActive(!active);
    sendClick();
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    setActive(false);
    onTransfer(e);
  };

  return (
    <div className={rootClassName}>
      <button type="button" className={s.inner} onClick={handleClick}>
        <div className={s.main}>
          <div className={s.title}>{ title }</div>
          <div className={s.subtitle}>{ accountNumber }</div>
        </div>
        <div className={s.side}>
          <div className={s.balance}>{ balance }</div>
        </div>
      </button>

      <div className={s.actions}>
        <button type="button" className={s.action} onClick={handleTransfer}>Transfer</button>
        <NavLink className={s.action} to={`/account/${id}/`}>Details</NavLink>
      </div>
    </div>
  );
};

export default Account;
