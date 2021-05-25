import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

import storage from './storage';

const GroupContext = createContext({});

const getRandomId = () => Math.random() * Date.now();

const mockedTasks = [
  { id: getRandomId(), title: 'Aprender a usar o expo', finished: false },
  { id: getRandomId(), title: 'Aprender conceitos de react', finished: false },
];

const mockedGroups = [
  { id: getRandomId(), title: 'Grupo 1', category: 'Programação', tasks: mockedTasks },
  { id: getRandomId(), title: 'Grupo 2', category: 'Estudos', tasks: mockedTasks },
];

const GroupProvider: React.FC = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>(mockedGroups);

  useEffect(() => {
    (async () => {
      const asyncStorageGroups = await AsyncStorage.getItem(storage.groups) as string;
      if (!asyncStorageGroups) setGroups(mockedGroups);
      else setGroups(JSON.parse(asyncStorageGroups));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(storage.groups, JSON.stringify(groups));
    })();
  }, [groups]);

  function removeGroup(groupId: number) {
    setGroups((prevGroups) => prevGroups.filter(({ id }) => id !== groupId));
  }

  function addGroup({ title, category }: AddGroupProps) {
    setGroups((prev) => [...prev, {
      id: getRandomId(),
      title,
      category,
      tasks: mockedTasks,
    }]);
  }

  const contextValue:GroupContextType = {
    groups,
    removeGroup,
    addGroup,
  };

  return (
    <GroupContext.Provider value={contextValue}>
      {children}
    </GroupContext.Provider>
  );
}

export { GroupContext, GroupProvider };
