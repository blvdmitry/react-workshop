import React from 'react';
import classnames from 'classnames';
import s from './Account.module.css';

class Account extends React.Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState((state) => ({ active: !state.active }));
  };

  render() {
    const { active } = this.state;
    const { title, accountNumber, balance } = this.props;
    const rootClassName = classnames(s.root,  active && s.rootActive);

    return (
      <div className={rootClassName}>
        <button type="button" className={s.inner} onClick={this.handleClick}>
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
  }
}

export default Account;
