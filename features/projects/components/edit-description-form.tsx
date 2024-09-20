'use client'

import { memo, useEffect, useOptimistic } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ProjectDetail } from '@/types/project'
import { editDescription } from '../actions/edit-description'
import { useFormState } from 'react-dom'
import { Text } from '@/components/ui/text'
import { useToast } from '@/hooks/use-toast'

interface EditDescriptionFormProps {
  project: ProjectDetail
  onCancel: () => void
}

export const EditDescriptionForm = memo(({ project, onCancel }: EditDescriptionFormProps) => {
  const { toast } = useToast()

  const [optimisticProject, updateOptimisticProject] = useOptimistic(
    { description: project.description },
    (state, newDescription: string) => ({
      ...state,
      description: newDescription,
    }),
  )

  const form = useForm({
    defaultValues: {
      description: optimisticProject.description,
    },
  })

  const [state, formAction] = useFormState(editDescription.bind(null, project), { message: null, error: '' })

  const handleSubmitAction = (data: FormData) => {
    const desc = data.get('description')?.toString()
    desc && updateOptimisticProject(desc)
    formAction(data)
  }

  useEffect(() => {
    if (state.message && state.error) {
      toast({
        title: state.error,
        description: state.message,
        variant: 'destructive',
      })
    }
  }, [state.error, state.message, toast])

  return (
    <Form {...form}>
      <form action={handleSubmitAction} className='w-2/3 gap-5'>
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder='Project description' className='resize-none' {...field} />
              </FormControl>
              <FormMessage>{state?.error}</FormMessage>
              <FormMessage>{state?.message}</FormMessage>
            </FormItem>
          )}
        />
        <div className='w-1/4 flex gap-2'>
          <Button type='submit'>Save</Button>
          <Button type='button' variant='destructive' onClick={onCancel}>
            Cancel
          </Button>
        </div>
        <Text>{state?.message}</Text>
      </form>
    </Form>
  )
})
EditDescriptionForm.displayName = 'EditDescriptionForm'
