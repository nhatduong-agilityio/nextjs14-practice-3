import { cn } from '../utils'

describe('cn function', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2', { class3: true, class4: false })
    expect(result).toBe('class1 class2 class3')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should deduplicate class names', () => {
    const result = cn('class1', 'class1', 'class2')
    expect(result).toBe('class1 class1 class2')
  })

  it('should handle conditional classes', () => {
    const condition = true
    const result = cn('class1', condition && 'class2', !condition && 'class3')
    expect(result).toBe('class1 class2')
  })
})
