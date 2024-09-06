import { useEffect, useState } from 'react'
import { Droppable, DroppableProps } from '@hello-pangea/dnd'

/**
 * * Why is using @hello-pangea/dnd to replace react-beautiful-dnd.
 * * Because, When use, the warning error `defaultProps will be removed` show on console.The warning is caused by the library.
 * * Specifically, react-beautiful-dnd uses an old version of react-redux, which in turn uses the feature mentioned in the message: defaultProps.
 * * @hello-pangea/dnd is essentially a fork of react-beautiful-dnd called @hello-pangea/dnd that provides the exact same functionality of the latest version of react-beautiful-dnd but with up-to-date dependencies.
 * * It resolve issue from react-beautiful-dnd.
 */

/**
 * @description
 * StrictModeDroppable is a wrapper component that works around a bug in React Strict Mode.
 * When React is running in Strict Mode, it will double-render components to detect side effects.
 * This causes problems with the `react-beautiful-dnd` library, which depends on the DOM being
 * stable across renders.
 *
 * StrictModeDroppable works around this by using `requestAnimationFrame` to defer the rendering
 * of the underlying `Droppable` component until the next animation frame. This ensures that the
 * DOM is stable across renders.
 *
 * @example
 * <StrictModeDroppable droppableId="my-list" type="LIST">
 *   {(provided) => (
 *     <div ref={provided.innerRef} {...provided.droppableProps}>
 *       Your list items go here
 *     </div>
 *   )}
 * </StrictModeDroppable>
 * @see https://github.com/atlassian/react-beautiful-dnd/issues/2404
 * @see https://stackoverflow.com/questions/72237144/react-strict-mode-cause-react-beautiful-dnd-to-fail
 */
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
