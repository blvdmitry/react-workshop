import React from 'react';
import AnalyticsContext from './AnalyticsContext';

const AnalyticsProvider = (props) => {
  const { children } = props;
  const [count, setCount] = React.useState(0);

  const sendClick = () => setCount(count + 1);

  return (
    <AnalyticsContext.Provider value={{ count, sendClick }}>
      { children }
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
