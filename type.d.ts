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
  newGroupVisible: boolean,
  toggleGroupVisible: () => void,
  newTaskVisible: boolean,
  toggleTaskVisible: () => void,
}

type CountdownContextType = {
  focusTime: number,
  isTimerActive: boolean,
  startCountdown: () => void,
  restartCountdown: () => void,
}
