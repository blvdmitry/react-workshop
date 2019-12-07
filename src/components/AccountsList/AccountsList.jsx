import React from 'react';
import { fetchEndpoint } from '../../api';
import Account from '../Account';
import Toast from '../Toast';
import s from './AccountsList.module.css';

class AccountsList extends React.Component {
  state = {
    data: [],
    size: window.innerWidth,
  };

  componentDidMount() {
    fetchEndpoint('accounts')
      .then(data => {
        this.setState({ data });
      });

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ size: window.innerWidth });
  };

  render() {
    const { data, size } = this.state;

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
              />
            </div>
          ))
        }

        <Toast text="Now we're talking!" active={size < 540} />
      </React.Fragment>
    );
  }
}

export default AccountsList;
