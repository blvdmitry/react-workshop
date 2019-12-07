import React from 'react';
import classnames from 'classnames';
import s from './Account.module.css';

const Account = (props) => {
  const { title, accountNumber, balance } = props;
  const [active, setActive] = React.useState(false);
  const rootClassName = classnames(s.root,  active && s.rootActive);

  const handleClick = () => setActive(!active);

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
        <button type="button" className={s.action}>Transfer</button>
        <button type="button" className={s.action}>Details</button>
      </div>
    </div>
  );
};

export default Account;
