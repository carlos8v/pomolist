declare module "*.png";

type AddGroupProps = {
  title: string,
  category: string,
}

type Task = {
  id: number,
  title: string,
  finished: boolean,
}

type Group = {
  id: number,
  title: string,
  category: string,
  tasks: Array<Activity>,
}

type GroupContextType = {
  groups: Array<Group>,
  addGroup: (group: AddGroupProps) => void,
  removeGroup: (groupId: number) => void,
  addTask: (groupId: number, title: string) => void,
  removeTask: (taskId: number) => void,
  toggleFinishTask: (taskId: number) => void,
  completeTasks: () => void,
  newGroupVisible: boolean,
  toggleGroupVisible: () => void,
  newTaskVisible: boolean,
  toggleTaskVisible: () => void,
}

type CountdownContextType = {
  isFocusTime: boolean,
  focusTime: number,
  restTime: number,
  startFocusCountdown: () => void,
  restartFocusCountdown: () => void,
}
