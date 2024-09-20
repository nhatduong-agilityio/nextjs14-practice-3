'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Constants
import { ROUTES } from '@/constants/routes'

// Components
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { BrandIcon } from '@/icons/brand-icon'
import { CloseIcon } from '@/icons/close-icon'

// Hooks
import { useDisclosure } from '@/hooks/use-disclosure'

// Utils
import { cn } from '@/utils/cn'

// Images
import TeamWorkImage from '@/public/team-work.svg'

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const titleButton = pathname === ROUTES.SIGN_IN ? 'Login' : 'Create an account'
  const titleButtonLink = pathname === ROUTES.SIGN_IN ? 'Create an account' : 'Login'
  const linkHref = pathname === ROUTES.SIGN_IN ? ROUTES.SIGN_UP : ROUTES.SIGN_IN

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
          data-testid='auth-left-section'
        >
          <div className='w-full flex justify-between items-center' data-testid='auth-header'>
            <BrandIcon data-testid='brand-icon' />
            {isOpen ? (
              <Link href={linkHref}>
                <Button size='lg' variant='secondary' onClick={onOpen} data-testid='auth-link-button'>
                  {titleButtonLink}
                </Button>
              </Link>
            ) : (
              <Button size='lg' variant='secondary' onClick={onOpen} data-testid='auth-main-button'>
                {titleButton}
              </Button>
            )}
          </div>
          <Image
            alt='Team Work'
            src={TeamWorkImage}
            priority
            sizes='100%'
            data-testid='teamwork-image'
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
          data-testid='auth-right-section'
        >
          <div
            className='flex flex-col sm:min-w-[506px] pt-2.5 px-2.5 overflow-y-scroll no-scrollbar'
            data-testid='auth-children'
          >
            {children}
          </div>
          <Button
            size='icon'
            variant='rounded'
            className='bg-input-foreground md:w-12 md:h-12 absolute top-[-2px] right-[-10px]'
            onClick={onClose}
            data-testid='auth-close-button'
          >
            <CloseIcon className='text-secondary' />
          </Button>
        </div>
      </section>
    </main>
  )
}
