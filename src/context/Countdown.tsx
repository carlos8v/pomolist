import React, { createContext, useEffect, useState } from 'react';

const CountdownContext = createContext({});

const mockedFocusTime = 60 * 1;
const mockedRestTime = 60 * 1;

const CountdownProvider: React.FC = ({ children }) => {
  const [isTimerActive, setIsTimeActive] = useState(false);
  const [focusTime, setFocusTime] = useState(mockedFocusTime);
  const [restTime, setRestTime] = useState(mockedRestTime);

  useEffect(() => {
    if (isTimerActive && focusTime > 0) {
      setTimeout(() => {
        setFocusTime((prev) => prev - 1);
      }, 1000);
    } else if (isTimerActive && focusTime === 0) {
      setFocusTime(mockedFocusTime);
      setIsTimeActive(false);
    }
  }, [isTimerActive, focusTime]);

  function startCountdown() { setIsTimeActive(true) };

  const contextValue:CountdownContextType = {
    focusTime,
    isTimerActive,
    startCountdown,
  };

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
}

export { CountdownContext, CountdownProvider };
