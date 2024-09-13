import { getAttachmentUrl } from '../attachment'

describe('getAttachmentUrl', () => {
  it('should return the correct URL for Word documents', () => {
    expect(getAttachmentUrl('docx')).toBe('https://cdn-icons-png.flaticon.com/512/5968/5968517.png')
    expect(getAttachmentUrl('doc')).toBe('https://cdn-icons-png.flaticon.com/512/5968/5968517.png')
  })

  it('should return the correct URL for PDF documents', () => {
    expect(getAttachmentUrl('pdf')).toBe('https://cdn-icons-png.flaticon.com/512/337/337946.png')
  })

  it('should return the correct URL for Excel documents', () => {
    expect(getAttachmentUrl('xlsx')).toBe('https://cdn-icons-png.flaticon.com/512/888/888850.png')
    expect(getAttachmentUrl('xls')).toBe('https://cdn-icons-png.flaticon.com/512/888/888850.png')
  })

  it('should return the correct URL for PowerPoint documents', () => {
    expect(getAttachmentUrl('pptx')).toBe('https://cdn-icons-png.flaticon.com/512/888/888874.png')
    expect(getAttachmentUrl('ppt')).toBe('https://cdn-icons-png.flaticon.com/512/888/888874.png')
  })

  it('should return the generic file icon URL for unknown file types', () => {
    expect(getAttachmentUrl('txt')).toBe('https://cdn-icons-png.flaticon.com/512/2521/2521704.png')
    expect(getAttachmentUrl('unknown')).toBe('https://cdn-icons-png.flaticon.com/512/2521/2521704.png')
  })

  it('should be case-insensitive', () => {
    expect(getAttachmentUrl('PDF')).toBe('https://cdn-icons-png.flaticon.com/512/337/337946.png')
    expect(getAttachmentUrl('DOCX')).toBe('https://cdn-icons-png.flaticon.com/512/5968/5968517.png')
  })
})
