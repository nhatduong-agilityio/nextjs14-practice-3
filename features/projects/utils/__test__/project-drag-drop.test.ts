import { reorder, reorderProjectMap, generateProjectMap } from '../project-drag-drop'
import { PROJECT_DETAILS, PROJECT_COLUMNS } from '@/constants/data'

describe('project-drag-drop utils', () => {
  describe('reorder', () => {
    it('should reorder items in an array', () => {
      const result = reorder(
        PROJECT_COLUMNS.map((col) => col.id),
        0,
        2,
      )
      expect(result).toEqual([
        '5b453d4d-c5ec-4f09-8d14-ce6cb6609df8',
        '31bfddd5-7144-4935-840f-ad9093089ae1',
        '4fe298fd-d503-489e-92ba-dc13583d4527',
      ])
    })
  })

  describe('reorderProjectMap', () => {
    const projectMap = generateProjectMap(PROJECT_DETAILS, PROJECT_COLUMNS)

    it('should reorder within the same column', () => {
      const result = reorderProjectMap({
        projectMap,
        source: { droppableId: 'Pending', index: 0 },
        destination: { droppableId: 'Pending', index: 1 },
      })
      expect(result.projectMap['Pending'][0].id).toBe('df3ff9e3-f6d0-47d6-86b7-2bf2d9ca645f')
      expect(result.projectMap['Pending'][1].id).toBe('3a933dc4-bb32-4d12-a272-0af75661d0ca')
    })

    it('should move project to a different column', () => {
      const result = reorderProjectMap({
        projectMap,
        source: { droppableId: 'Pending', index: 0 },
        destination: { droppableId: 'Run', index: 0 },
      })
      expect(result.projectMap['Pending'].length).toBe(1)
      expect(result.projectMap['Run'].length).toBe(3)
      expect(result.projectMap['Run'][0].id).toBe('3a933dc4-bb32-4d12-a272-0af75661d0ca')
    })
  })

  describe('generateProjectMap', () => {
    it('should generate a correct project map', () => {
      const result = generateProjectMap(PROJECT_DETAILS, PROJECT_COLUMNS)
      expect(Object.keys(result)).toEqual(['Pending', 'Run', 'Completed'])
      expect(result['Pending'].length).toBe(2)
      expect(result['Run'].length).toBe(2)
      expect(result['Completed'].length).toBe(1)
    })

    it('should sort projects within columns by index', () => {
      const result = generateProjectMap(PROJECT_DETAILS, PROJECT_COLUMNS)
      expect(result['Pending'][0].index).toBe(0)
      expect(result['Pending'][1].index).toBe(1)
    })
  })
})
