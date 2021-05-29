import React, { createContext, useEffect, useState } from 'react';

import {
  sendCountdownEndedNotification,
  cancelPendindNotifications
} from '../lib/notifications';

const CountdownContext = createContext({});

const focusTotalTime = 60 * 25;
const restTotalTime = 60 * 5;

let countdownInterval: NodeJS.Timeout;

const CountdownProvider: React.FC = ({ children }) => {
  const [isFocusTime, setIsFocusTime] = useState(false);
  const [focusTime, setFocusTime] = useState(focusTotalTime);
  const [restTime, setRestTime] = useState(0);

  useEffect(() => {
    if (isFocusTime && focusTime > 0) {
      countdownInterval = setTimeout(() => {
        setFocusTime((prev) => prev - 1);
      }, 1000);
    } else if (!isFocusTime && restTime > 0) {
      countdownInterval = setTimeout(() => {
        setRestTime((prev) => prev - 1);
      },1000);
    } else if (isFocusTime && focusTime === 0) {
      setFocusTime(focusTotalTime);
      setRestTime(restTotalTime);
      setIsFocusTime(false);
    }
  }, [isFocusTime, focusTime, restTime]);

  function startFocusCountdown() {
    setIsFocusTime(true);
    sendCountdownEndedNotification(focusTotalTime);
  };

  async function restartFocusCountdown() {
    clearInterval(countdownInterval);
    await cancelPendindNotifications();
    setIsFocusTime(false);
    setFocusTime(focusTotalTime);
  }

  const contextValue:CountdownContextType = {
    isFocusTime,
    focusTime,
    restTime,
    startFocusCountdown,
    restartFocusCountdown,
  };

  return (
    <CountdownContext.Provider value={contextValue}>
      {children}
    </CountdownContext.Provider>
  );
}

export { CountdownContext, CountdownProvider };
