import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      backgroundColor: '#2a2a40',
      color: '#ffd700',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5em',
      margin: '20px auto',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)'
    }}>
      {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  );
};

export default Clock;
