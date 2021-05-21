type Group = {
  title: string,
  category: string,
}

type ContextType = {
  groups: Array<Group>,
  removeGroup: (groupTitle: stirng) => void,
}
