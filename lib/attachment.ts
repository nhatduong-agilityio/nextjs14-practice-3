export const getAttachmentUrl = (fileType: string): string => {
  switch (fileType.toLowerCase()) {
    case 'docx':
    case 'doc':
      return 'https://cdn-icons-png.flaticon.com/512/5968/5968517.png'
    case 'pdf':
      return 'https://cdn-icons-png.flaticon.com/512/337/337946.png'
    case 'xlsx':
    case 'xls':
      return 'https://cdn-icons-png.flaticon.com/512/888/888850.png'
    case 'pptx':
    case 'ppt':
      return 'https://cdn-icons-png.flaticon.com/512/888/888874.png'
    default:
      return 'https://cdn-icons-png.flaticon.com/512/2521/2521704.png' // Generic file icon
  }
}
