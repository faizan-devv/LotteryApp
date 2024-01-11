import React from 'react';

import Styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={Styles.Ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
