'use client'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'
import TeamWorkImage from '@/public/team-work.svg'
import { BrandIcon } from '@/icons/brand-icon'
import { useDisclosure } from '@/hooks/use-disclosure'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import { CloseIcon } from '@/icons/close-icon'
import Link from 'next/link'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const titleButton = pathname === '/sign-in' ? 'Login' : 'Create an account'
  const titleButtonLink = pathname === '/sign-in' ? 'Create an account' : 'Login'
  const linkHref = pathname === '/sign-in' ? '/sign-up' : '/sign-in'

  return (
    <main className='h-dvh w-dvw flex justify-center items-center bg-body px-4 md:px-5 xl:px-0'>
      <section
        className={cn(
          '2xl:flex rounded-lg md:rounded-xl shadow',
          !isOpen && 'max-h-[90dvh] overflow-y-scroll no-scrollbar',
        )}
      >
        <div
          className={cn(
            'flex flex-col justify-center items-center p-5 md:p-30 xl:px-50 xl:pt-60 xl:pb-90 bg-background rounded-lg md:rounded-xl gap-6 md:gap-50',
            isOpen &&
              'hidden 2xl:flex rounded-lg md:rounded-xl 2xl:rounded-e-none animate-fade-in-right border border-border-secondary',
          )}
        >
          <div className='w-full flex justify-between items-center'>
            <BrandIcon />
            {isOpen ? (
              <Link href={linkHref}>
                <Button size='lg' variant='secondary' onClick={onOpen}>
                  {titleButtonLink}
                </Button>
              </Link>
            ) : (
              <Button size='lg' variant='secondary' onClick={onOpen}>
                {titleButton}
              </Button>
            )}
          </div>
          <Image
            alt='Team Work'
            src={TeamWorkImage}
            priority
            sizes='100%'
            // Make the image display full width
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: 414,
              maxHeight: 252,
            }}
          />
          <Heading headingLevel='h2' className='sm:px-3 md:max-w-[465px] md:px-10 text-center'>
            Monitoring your Sales Anytime. Easier & Effective than Before
          </Heading>
        </div>
        <div
          className={cn(
            'hidden flex-col justify-start items-center p-5 md:p-30 xl:p-50 bg-card rounded-lg md:rounded-xl 2xl:rounded-s-none animate-fade-in-left relative max-h-[90dvh]',
            isOpen && 'flex',
          )}
        >
          <div className='flex flex-col sm:min-w-[506px] pt-2.5 px-2.5 overflow-y-scroll no-scrollbar'>{children}</div>
          <Button
            size='icon'
            variant='rounded'
            className='bg-input-foreground md:w-12 md:h-12 absolute top-[-2px] right-[-10px]'
            onClick={onClose}
          >
            <CloseIcon className='text-secondary' />
          </Button>
        </div>
      </section>
    </main>
  )
}
