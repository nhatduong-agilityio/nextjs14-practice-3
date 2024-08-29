import { useEffect, useState } from 'react'
import { Droppable, DroppableProps } from '@hello-pangea/dnd'

export const StrictModeDroppable = (props: DroppableProps) => {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return <Droppable {...props} />
}
