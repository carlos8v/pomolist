import React, { createContext, useState } from 'react';

const Context = createContext({});

const mockedGroups = [
  { title: 'Grupo 1', category: 'Programação' },
  { title: 'Grupo 2', category: 'Estudos' },
];

const Provider: React.FC = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>(mockedGroups);

  function removeGroup(groupTitle: string) {
    setGroups((prevGroups) => prevGroups.filter(({ title }) => title !== groupTitle));
  }

  const contextValue:ContextType = {
    groups,
    removeGroup
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
