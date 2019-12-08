import React from 'react';
import s from './Confirmation.module.css';

const Confirmation = (props) => {
  const { onFinish } = props;
  const fieldsRef = React.useRef([]);
  const fieldsLength = 4;

  React.useEffect(() => {
    fieldsRef.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!value) return;
    if (index === fieldsLength - 1) {
      onFinish();
      return;
    }

    fieldsRef.current[index + 1].focus();
  };

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
