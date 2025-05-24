import React, { useEffect, useState } from 'react';

const TypingText = ({ text = '', speed = 40, ...props }) => {
  const safeText = typeof text === 'string' ? text : '';
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < safeText.length) {
        setDisplayed((prev) => prev + safeText[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [safeText, speed]);

  return <span {...props}>{displayed}</span>;
};

export default TypingText; 