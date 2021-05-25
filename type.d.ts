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
  removeGroup: (groupId: number) => void,
  addGroup: (group: AddGroupProps) => void,
}

type CountdownContextType = {
  focusTime: number,
  isTimerActive: boolean,
  startCountdown: () => void,
}
