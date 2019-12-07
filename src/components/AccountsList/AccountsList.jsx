import React from 'react';
import { fetchEndpoint } from '../../api';
import Account from '../Account';
import Toast from '../Toast';
import s from './AccountsList.module.css';

class AccountsList extends React.Component {
  state = {
    data: [],
    resizing: false,
  };

  timer;

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
    if (this.timer) clearTimeout(this.timer);

    this.setState({ resizing: true });

    this.timer = setTimeout(() => {
      console.log('false');
      this.setState({ resizing: false });
    }, 3000);
  };

  render() {
    const { data, resizing } = this.state;

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

        <Toast text="I'm already mobile. Stop it!" active={resizing} />
      </React.Fragment>
    );
  }
}

export default AccountsList;
