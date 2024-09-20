import { ProjectDetail } from '@/types/project'
import { updateProject } from './update-project'

export type DescriptionState = {
  error?: string
  message?: string | null
}

export const editDescription = async (
  project: ProjectDetail,
  prevState: DescriptionState,
  formData: FormData,
): Promise<DescriptionState> => {
  const description = formData.get('description')
  if (!description) {
    return {
      error: 'Description is null',
      message: 'Missing Fields. Failed to edit description',
    }
  }

  const descriptionUpdated = description.toString()

  try {
    await updateProject(project.id, { ...project, description: descriptionUpdated })
    return {
      message: 'Description updated successfully',
    }
  } catch (error) {
    return {
      error: 'Failed to fetch',
      message: 'Failed to update description.',
    }
  }
}
