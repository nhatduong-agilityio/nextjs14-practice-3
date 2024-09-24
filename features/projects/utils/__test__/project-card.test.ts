import { calculateProjectProgress, calculateTaskCompleted } from '../project-card'
import { Task } from '@/types/project'

describe('calculateProjectProgress', () => {
  it('should return 0 for an empty task list', () => {
    expect(calculateProjectProgress([])).toBe(0)
  })

  it('should calculate correct progress for a list of tasks', () => {
    const tasks = [{ status: 'Completed' }, { status: 'In Progress' }, { status: 'Completed' }, { status: 'Pending' }]
    expect(calculateProjectProgress(tasks as Task[])).toBe(50)
  })

  it('should return 100 when all tasks are completed', () => {
    const tasks = [{ status: 'Completed' }, { status: 'Completed' }, { status: 'Completed' }]
    expect(calculateProjectProgress(tasks as Task[])).toBe(100)
  })

  it('should return 0 when no tasks are completed', () => {
    const tasks = [{ status: 'In Progress' }, { status: 'Pending' }, { status: 'In Progress' }]
    expect(calculateProjectProgress(tasks as Task[])).toBe(0)
  })
})

describe('calculateTaskCompleted', () => {
  it('should return "0" for an empty task list', () => {
    const emptyTaskList: Task[] = []
    expect(calculateTaskCompleted(emptyTaskList)).toBe('0')
  })

  it('should return correct ratio for a list with completed and incomplete tasks', () => {
    const taskList: Task[] = [
      { id: '1', title: 'Task 1', status: 'Completed', assigned: [], dueDate: '' },
      { id: '2', title: 'Task 2', status: 'In Progress', assigned: [], dueDate: '' },
      { id: '3', title: 'Task 3', status: 'Completed', assigned: [], dueDate: '' },
      { id: '4', title: 'Task 4', status: 'Pending', assigned: [], dueDate: '' },
    ]
    expect(calculateTaskCompleted(taskList)).toBe('2/4')
  })

  it('should return correct ratio for a list with all completed tasks', () => {
    const taskList: Task[] = [
      { id: '1', title: 'Task 1', status: 'Completed', assigned: [], dueDate: '' },
      { id: '2', title: 'Task 2', status: 'Completed', assigned: [], dueDate: '' },
      { id: '3', title: 'Task 3', status: 'Completed', assigned: [], dueDate: '' },
    ]
    expect(calculateTaskCompleted(taskList)).toBe('3/3')
  })

  it('should return correct ratio for a list with no completed tasks', () => {
    const taskList: Task[] = [
      { id: '1', title: 'Task 1', status: 'In Progress', assigned: [], dueDate: '' },
      { id: '2', title: 'Task 2', status: 'Pending', assigned: [], dueDate: '' },
    ]
    expect(calculateTaskCompleted(taskList)).toBe('0/2')
  })
})
