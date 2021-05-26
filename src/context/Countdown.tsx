import React, { createContext, useEffect, useState } from 'react';

const CountdownContext = createContext({});

const focusTotalTime = 60 * 1;
const restTotalTime = 60 * 1;

let countdownInterval: NodeJS.Timeout;

const CountdownProvider: React.FC = ({ children }) => {
  const [isTimerActive, setIsTimeActive] = useState(false);
  const [focusTime, setFocusTime] = useState(focusTotalTime);
  const [restTime, setRestTime] = useState(restTotalTime);

  useEffect(() => {
    if (isTimerActive && focusTime > 0) {
      countdownInterval = setTimeout(() => {
        setFocusTime((prev) => prev - 1);
      }, 1000);
    } else if (isTimerActive && focusTime === 0) {
      setFocusTime(focusTotalTime);
      setIsTimeActive(false);
    }
  }, [isTimerActive, focusTime]);

  function startCountdown() { setIsTimeActive(true) };

  function restartCountdown() {
    clearInterval(countdownInterval);
    setIsTimeActive(false);
    setFocusTime(focusTotalTime);
  }

  const contextValue:CountdownContextType = {
    focusTime,
    isTimerActive,
    startCountdown,
    restartCountdown
  };

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
}

export { CountdownContext, CountdownProvider };
