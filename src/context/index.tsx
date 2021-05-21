import React, { createContext, useEffect, useState } from 'react';

const Context = createContext({});

const mockedGroups = [
  { id: 0, title: 'Grupo 1', category: 'Programação' },
  { id: 1, title: 'Grupo 2', category: 'Estudos' },
];

const mockedFocusTime = 60 * 1;
const mockedRestTime = 60 * 1;

const Provider: React.FC = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>(mockedGroups);
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

  function removeGroup(groupId: number) {
    setGroups((prevGroups) => prevGroups.filter(({ id }) => id !== groupId));
  }

  function addGroup({ title, category }: AddGroupProps) {
    setGroups((prev) => [...prev, {
      id: Math.random() * 1000,
      title,
      category,
    }]);
  }

  function startCountdown() { setIsTimeActive(true) };

  const contextValue:ContextType = {
    groups,
    removeGroup,
    addGroup,
    focusTime,
    isTimerActive,
    startCountdown,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
