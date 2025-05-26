import React, { useEffect, useState, useRef } from 'react';

const TypingText = ({ text = '', speed = 40, ...props }) => {
  const [displayed, setDisplayed] = useState('');
  const intervalRef = useRef(null);
  const textRef = useRef(text);

  useEffect(() => {
    // Update the text ref when text prop changes
    textRef.current = text;
    
    // Reset the displayed text
    setDisplayed('');
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < textRef.current.length) {
        setDisplayed(textRef.current.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    // Start the typing animation
    intervalRef.current = setInterval(typeNextChar, speed);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, speed]);

  return <span {...props}>{displayed}</span>;
};

export default TypingText; 