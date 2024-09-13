import { calculateProjectProgress } from '../project-card'
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
