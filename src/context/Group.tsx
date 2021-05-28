import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import storage from './storage';

const GroupContext = createContext({});

const getRandomId = () => Math.random() * Date.now();

const GroupProvider: React.FC = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [newGroupVisible, setNewGroupVisible] = useState(false);
  const [newTaskVisible, setNewTaskVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const asyncStorageGroups = await AsyncStorage.getItem(storage.groups) as string;
      if (!asyncStorageGroups) setGroups([]);
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
      tasks: [],
    }]);
  }

  function addTask(groupId: number, title: string) {
    setGroups((prev) => prev.map((group) => ({
      ...group,
      tasks: group.id === groupId
        ? [...group.tasks, {
            id: getRandomId(),
            title,
            finished: false,
          }]
        : group.tasks,
    })));
  }

  function removeTask(taskId: number) {
    setGroups((prev) => prev.map((group) => ({
      ...group,
      tasks: group.tasks.filter(({ id }) => id !== taskId)
    })));
  }

  function toggleFinishTask(taskId: number) {
    setGroups((prev) => prev.map((group) => ({
      ...group,
      tasks: group.tasks.map((task) => ({
        ...task,
        finished: task.id === taskId
          ? !task.finished
          : task.finished
      }))
    })))
  }

  function completeTasks() {
    setGroups((prev) => prev
      .filter((group) => group.tasks.length !== 0)
      .filter((group) => group.tasks.some(({ finished }) => !finished ))
      .map((group) => ({
        ...group,
        tasks: group.tasks.filter(({ finished }) => !finished)
    })));
  }

  function toggleGroupVisible() { setNewGroupVisible(prev => !prev) }
  function toggleTaskVisible() { setNewTaskVisible(prev => !prev) }

  const contextValue:GroupContextType = {
    groups,
    addGroup,
    removeGroup,
    addTask,
    removeTask,
    toggleFinishTask,
    completeTasks,
    newGroupVisible,
    toggleGroupVisible,
    newTaskVisible,
    toggleTaskVisible,
  };

  return (
    <GroupContext.Provider value={contextValue}>
      {children}
    </GroupContext.Provider>
  );
}

export { GroupContext, GroupProvider };
