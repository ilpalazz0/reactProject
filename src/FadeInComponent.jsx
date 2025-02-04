import React from 'react';
import './styles/fade-in.css';

const FadeInComponent = ({ children, duration = '1s' }) => {
  const style = {
    '--fade-in-duration': duration,
  };

  return <div className="fade-in" style={style}>{children}</div>;
};

export default FadeInComponent;
