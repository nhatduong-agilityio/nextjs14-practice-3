import { Task } from '@/types/project'

export const calculateProjectProgress = (taskList: Task[]): number => {
  const totalTasks = taskList.length
  const completedTasks = taskList.filter((task) => task.status === 'Completed').length

  if (totalTasks === 0) return 0

  return Math.round((completedTasks / totalTasks) * 100)
}

export const calculateTaskCompleted = (taskList: Task[]): string => {
  const totalTasks = taskList.length
  const completedTasks = taskList.filter((task) => task.status === 'Completed').length

  if (totalTasks === 0) return '0'

  return `${completedTasks}/${totalTasks}`
}
