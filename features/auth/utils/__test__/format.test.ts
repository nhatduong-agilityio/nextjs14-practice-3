import { formatFullName } from '../format'

describe('formatFullName', () => {
  it('should format a full name correctly', () => {
    expect(formatFullName('John Doe')).toBe('doejohn')
  })

  it('should handle multiple words', () => {
    expect(formatFullName('John Middle Doe')).toBe('doejohn')
  })

  it('should handle single word names', () => {
    expect(formatFullName('John')).toBe('johnjohn')
  })

  it('should handle names with extra spaces', () => {
    expect(formatFullName('  John   Doe  ')).toBe('doejohn')
  })

  it('should handle all lowercase names', () => {
    expect(formatFullName('john doe')).toBe('doejohn')
  })

  it('should handle all uppercase names', () => {
    expect(formatFullName('JOHN DOE')).toBe('doejohn')
  })
})
