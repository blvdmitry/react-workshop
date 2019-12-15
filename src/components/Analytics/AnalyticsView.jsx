import React from 'react';
import AnalyticsContext from './AnalyticsContext';
import s from './Analytics.module.css';

const AnalyticsView = () => {
  const { count } = React.useContext(AnalyticsContext);

  return <div className={s.root}>Clicked {count} times</div>;
};

export default AnalyticsView;
