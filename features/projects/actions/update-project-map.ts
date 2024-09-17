import { ApiDataResponse } from '@/types/api'
import { updateColumn } from './update-column'
import { updateProject } from './update-project'
import { ProjectColumn, ProjectDetail } from '@/types/project'

const updateArrayWithIDs = (existingArray: string[], newIDs: string[]): string[] => {
  // Create a Set from existingArray for quick existence checks
  const existingSet = new Set(existingArray)

  // Filter newIDs to include only those not already in existingArray
  const newIDsToAdd = newIDs.filter((id) => !existingSet.has(id))

  // Return the result array with existingArray plus the newIDsToAdd
  return [...existingArray, ...newIDsToAdd]
}

export const updateProjectMap = async (
  columnsOrdered: Record<string, ProjectDetail[]>,
  sourceColumn: ProjectColumn,
  destinationColumn: ProjectColumn,
  movedProject: ProjectDetail,
  patchedProject?: ProjectDetail,
): Promise<ApiDataResponse<Record<string, ProjectDetail[]>>> => {
  try {
    const isSameColumn = sourceColumn.id === destinationColumn.id && patchedProject
    const movedProjectIndex = movedProject.index
    const prevProjectsDestinationColumn = columnsOrdered[destinationColumn.title].filter(
      (project) => project.id !== movedProject.id,
    )
    const patchedProjectIndex = patchedProject
      ? patchedProject.index
      : prevProjectsDestinationColumn.length !== 0
        ? prevProjectsDestinationColumn.length
        : 0

    if (isSameColumn) {
      // Update all affected projects
      await Promise.all([
        updateProject(movedProject.id, { ...movedProject, index: patchedProjectIndex }),
        updateProject(patchedProject.id, { ...patchedProject, index: movedProjectIndex }),
      ])

      // Update column
      const updatedColumnProjects = updateArrayWithIDs(sourceColumn.projectIds, [movedProject.id, patchedProject.id])
      await updateColumn(sourceColumn.id, {
        ...sourceColumn,
        projectIds: updatedColumnProjects,
      })
    } else {
      const projectsSourceColumn = columnsOrdered[sourceColumn.title]
      const projectsDestinationColumn = columnsOrdered[destinationColumn.title]
      const newProjectsSourceColumn = projectsSourceColumn.filter((project) => project.index > movedProjectIndex)
      const newProjectsDestinationColumn = projectsDestinationColumn.filter(
        (project) => project.index >= patchedProjectIndex && project.id !== movedProject.id,
      )

      if (newProjectsSourceColumn.length > 0) {
        await Promise.all(
          newProjectsSourceColumn.map((project) => updateProject(project.id, { ...project, index: project.index - 1 })),
        )
      }

      if (newProjectsDestinationColumn.length > 0) {
        await Promise.all(
          newProjectsDestinationColumn.map((project) =>
            updateProject(project.id, { ...project, index: project.index + 1 }),
          ),
        )
      }

      await updateProject(movedProject.id, {
        ...movedProject,
        columnId: destinationColumn.id,
        index: patchedProjectIndex,
      })

      // Update columns
      const updatedSourceProjects = sourceColumn.projectIds.filter((id) => id !== movedProject.id)
      const updatedDestinationProjects = updateArrayWithIDs(destinationColumn.projectIds, [movedProject.id])
      await Promise.all([
        updateColumn(sourceColumn.id, { ...sourceColumn, projectIds: updatedSourceProjects }),
        updateColumn(destinationColumn.id, { ...destinationColumn, projectIds: updatedDestinationProjects }),
      ])
    }

    // Return the updated columnsOrdered state
    return { data: columnsOrdered }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to update after drag. Please try again.'
    return { error: errorMessage }
  }
}
