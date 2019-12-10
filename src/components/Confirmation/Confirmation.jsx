import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmationActions } from '../../store/confirmation';
import s from './Confirmation.module.css';

const Confirmation = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const active = useSelector(state => state.confirmation.id === id);
  const fieldsRef = React.useRef([]);
  const fieldsLength = 4;

  React.useEffect(() => {
    fieldsRef.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!value) return;
    if (index === fieldsLength - 1) {
      dispatch(confirmationActions.hide());
      return;
    }

    fieldsRef.current[index + 1].focus();
  };

  if (!active) return null;

  return (
    <div className={s.root}>
      <div className={s.title}>Enter your PIN</div>
      <div className={s.fields}>
        {
          [...Array(fieldsLength).keys()].map(index => (
            <input
              type="text"
              maxLength={1}
              key={index}
              className={s.field}
              onChange={(e) => handleChange(e, index)}
              ref={el => fieldsRef.current[index] = el}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Confirmation;
