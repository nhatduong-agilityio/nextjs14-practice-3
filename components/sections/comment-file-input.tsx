import React, { useState, useRef, memo } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface CommentFileInputProps {
  onSubmit: (content: string | File) => void
}

export const CommentFileInput = memo(({ onSubmit }: CommentFileInputProps) => {
  const [input, setInput] = useState('')
  const [isFile, setIsFile] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setIsFile(false)
  }

  const handleFileSelect = (file: File) => {
    setInput(file.name)
    setIsFile(true)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }

  const handleSubmit = () => {
    if (isFile && fileInputRef.current?.files?.[0]) {
      onSubmit(fileInputRef.current.files[0])
    } else if (!isFile && input) {
      onSubmit(input)
    }
    setInput('')
    setIsFile(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className='relative h-[82px]'>
      <div className='border-4 border-card-secondary rounded-full absolute top-[calc((82px-40px)/2)] left-0 z-10'>
        <Avatar size='sm'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div
        className='flex items-center bg-card-foreground rounded-sm p-5 ml-6 w-[calc(100%-24px)]'
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <Input
          hasSeparator={false}
          value={input}
          onChange={handleInputChange}
          onDoubleClick={handleDoubleClick}
          placeholder='Add a comment or upload a file…'
          className='w-full h-[42px] bg-card-secondary px-3 text-base placeholder:text-select-foreground rounded-[3px]'
          readOnly={isFile}
        />
        <input
          title='file'
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          className='hidden'
          accept='.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx'
        />
        {input && (
          <Button onClick={handleSubmit} variant='outline' className='w-auto ml-5 rounded-[3px]'>
            Submit
          </Button>
        )}
      </div>
    </div>
  )
})
CommentFileInput.displayName = 'CommentFileInput'
