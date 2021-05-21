type AddGroupProps = {
  title: string,
  category: string,
}

type Group = {
  id: number,
  title: string,
  category: string,
}

type ContextType = {
  groups: Array<Group>,
  removeGroup: (groupId: number) => void,
  addGroup: (group: Group) => void,
}
