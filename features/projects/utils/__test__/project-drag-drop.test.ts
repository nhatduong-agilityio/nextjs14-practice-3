import { reorder, generateProjectMap } from '../project-drag-drop'
import { getProjectById } from '../../actions/get-projects'
import { ProjectColumn, ProjectDetail } from '@/types/project'
import { PROJECT_COLUMNS, PROJECT_DETAILS } from '@/constants/data'

jest.mock('../../actions/get-projects')

describe('project-drag-drop utils', () => {
  describe('reorder', () => {
    it('should reorder an array of projects', () => {
      const projects = ['project1', 'project2', 'project3', 'project4']
      const result = reorder(projects, 1, 3)
      expect(result).toEqual(['project1', 'project3', 'project4', 'project2'])
    })
  })

  describe('generateProjectMap', () => {
    const mockColumns: ProjectColumn[] = [
      { id: 'col1', title: 'Column 1', index: 0, projects: [{ projectId: PROJECT_DETAILS[0].id, index: 0 }] },
      { id: 'col2', title: 'Column 2', index: 1, projects: [{ projectId: PROJECT_DETAILS[2].id, index: 0 }] },
    ]

    const mockProjects: ProjectDetail[] = [PROJECT_DETAILS[0], PROJECT_DETAILS[2]]

    beforeEach(() => {
      ;(getProjectById as jest.Mock).mockImplementation((id) =>
        Promise.resolve({ data: mockProjects.find((p) => p.id === id) }),
      )
    })

    it('should generate a project map from columns', async () => {
      const result = await generateProjectMap(mockColumns)

      expect(result).toEqual({
        'Column 1': [{ ...mockProjects[0], index: 0 }],
        'Column 2': [{ ...mockProjects[1], index: 0 }],
      })

      expect(getProjectById).toHaveBeenCalledTimes(2)
      expect(getProjectById).toHaveBeenCalledWith(PROJECT_DETAILS[0].id)
      expect(getProjectById).toHaveBeenCalledWith(PROJECT_DETAILS[2].id)
    })

    it('should handle columns with no projects', async () => {
      const emptyColumns: ProjectColumn[] = [{ id: 'col3', title: 'Empty Column', index: 0, projects: [] }]

      const result = await generateProjectMap(emptyColumns)

      expect(result).toEqual({
        'Empty Column': [],
      })

      expect(getProjectById).not.toHaveBeenCalled()
    })

    it('should handle null project responses and sort projects by index', async () => {
      const mockColumnsWithNulls: ProjectColumn[] = [
        {
          id: 'col1',
          title: 'Column 1',
          index: 1,
          projects: [
            { projectId: 'proj1', index: 2 },
            { projectId: 'proj2', index: 1 },
            { projectId: 'proj3', index: 0 },
          ],
        },
        {
          id: 'col2',
          title: 'Column 2',
          index: 0,
          projects: [{ projectId: 'proj4', index: 0 }],
        },
      ]

      const mockProjects: ProjectDetail[] = [
        { ...PROJECT_DETAILS[0], id: 'proj1', name: 'Project 1' },
        { ...PROJECT_DETAILS[0], id: 'proj2', name: 'Project 2' },
        { ...PROJECT_DETAILS[0], id: 'proj3', name: 'Project 3' },
        { ...PROJECT_DETAILS[0], id: 'proj4', name: 'Project 4' },
      ]

      ;(getProjectById as jest.Mock).mockImplementation((id) => {
        if (id === 'proj3') {
          return Promise.resolve({ data: null })
        }
        return Promise.resolve({ data: mockProjects.find((p) => p.id === id) })
      })

      const result = await generateProjectMap(mockColumnsWithNulls)

      expect(result).toEqual({
        'Column 2': [{ ...mockProjects[3], index: 0 }],
        'Column 1': [
          { ...mockProjects[1], index: 1 },
          { ...mockProjects[0], index: 2 },
        ],
      })

      expect(getProjectById).toHaveBeenCalledTimes(4)
    })
  })
})
