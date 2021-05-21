import React, { createContext, useState } from 'react';

const Context = createContext({});

const mockedGroups = [
  { id: 0, title: 'Grupo 1', category: 'Programação' },
  { id: 1, title: 'Grupo 2', category: 'Estudos' },
];

const Provider: React.FC = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>(mockedGroups);

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

  const contextValue:ContextType = {
    groups,
    removeGroup,
    addGroup,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
