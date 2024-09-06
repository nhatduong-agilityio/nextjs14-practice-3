import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ProjectFilter } from '@/types/project'

export const useProjectFilter = () => {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const setFilter = (type: ProjectFilter = 'arrange', value: string) => {
    const newParams = new URLSearchParams(params.toString())
    newParams.set(type, value)
    router.push(`${pathname}?${newParams.toString()}`)
  }

  const getFilter = (type: ProjectFilter = 'arrange') => params.get(type)

  return { setFilter, getFilter }
}
