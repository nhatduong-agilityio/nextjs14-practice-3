import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Task } from './models'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getInitials = (name: string) => {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export const calculateDaysLeft = (dueDate: string): number => {
  const now = new Date()
  const due = new Date(dueDate)
  const diffTime = due.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return Math.max(diffDays, 0) // Ensure we don't return negative days
}

export const calculateProgress = (taskList: Task[]): number => {
  const totalTasks = taskList.length
  const completedTasks = taskList.filter((task) => task.status === 'Completed').length

  if (totalTasks === 0) return 0

  return Math.round((completedTasks / totalTasks) * 100)
}
