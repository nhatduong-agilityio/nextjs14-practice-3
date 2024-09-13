import { getInitials, calculateDaysLeft, getTimeAgo, formatDate } from '../formats'

describe('formats utils', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('getInitials', () => {
    it('should return initials for a full name', () => {
      expect(getInitials('John Doe')).toBe('JD')
    })

    it('should return first two letters for a single name', () => {
      expect(getInitials('John')).toBe('JO')
    })
  })

  describe('calculateDaysLeft', () => {
    it('should calculate days left correctly', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const tomorrow = new Date('2023-05-16T12:00:00Z')
      expect(calculateDaysLeft(tomorrow.toISOString())).toBe(1)
    })

    it('should return 0 for past dates', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const yesterday = new Date('2023-05-14T12:00:00Z')
      expect(calculateDaysLeft(yesterday.toISOString())).toBe(0)
    })
  })

  describe('getTimeAgo', () => {
    it('should return correct time for seconds ago', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const tenSecondsAgo = new Date('2023-05-15T11:59:50Z')
      expect(getTimeAgo(tenSecondsAgo.toISOString())).toBe('10 seconds ago')
    })

    it('should return correct time for minutes ago', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const fiveMinutesAgo = new Date('2023-05-15T11:55:00Z')
      expect(getTimeAgo(fiveMinutesAgo.toISOString())).toBe('5 minutes ago')
    })

    it('should return correct time for hours ago', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const twoHoursAgo = new Date('2023-05-15T10:00:00Z')
      expect(getTimeAgo(twoHoursAgo.toISOString())).toBe('2 hours ago')
    })

    it('should return correct time for days ago', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const threeDaysAgo = new Date('2023-05-12T12:00:00Z')
      expect(getTimeAgo(threeDaysAgo.toISOString())).toBe('3 days ago')
    })

    it('should return correct time for months ago', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const threeMonthsAgo = new Date('2023-02-15T12:00:00Z')
      expect(getTimeAgo(threeMonthsAgo.toISOString())).toBe('2 months ago')
    })

    it('should return correct time for years ago', () => {
      const now = new Date('2023-05-15T12:00:00Z')
      jest.setSystemTime(now)
      const oneYearAgo = new Date('2022-05-15T12:00:00Z')
      expect(getTimeAgo(oneYearAgo.toISOString())).toBe('1 years ago')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2023-05-15T12:00:00Z')
      expect(formatDate(date.toISOString())).toMatch('Mon, May 15, 2023')
    })
  })
})
