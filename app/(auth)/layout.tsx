'use client'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'
import TeamWorkImage from '@/public/team-work.svg'
import { BrandIcon } from '@/icons/brand-icon'
import { useDisclosure } from '@/hooks/useDisclosure'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { CloseIcon } from '@/icons/close-icon'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const titleButton = pathname === '/sign-in' ? 'Login' : 'Create an account'
  const titleButtonLink = pathname === '/sign-in' ? 'Create an account' : 'Login'
  const linkHref = pathname === '/sign-in' ? '/sign-up' : '/sign-in'

  return (
    <main className='h-dvh w-dvw flex justify-center items-center bg-background'>
      <section className='flex rounded-xl shadow-sm'>
        <div
          className={cn(
            'flex flex-col justify-center items-center p-50 bg-body rounded-xl gap-50',
            isOpen && 'rounded-none rounded-s-xl animate-fade-in-right',
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
          <Image alt='Team Work' src={TeamWorkImage} priority width={414} height={252} />

          <Heading headingLevel='h2' className='max-w-[465px] px-10 text-center'>
            Monitoring your Sales Anytime. Easier & Effective than Before
          </Heading>
        </div>
        <div
          className={cn(
            'hidden flex-col justify-center items-center p-50 bg-card rounded-e-xl gap-50 animate-fade-in-left relative',
            isOpen && 'flex',
          )}
        >
          {children}
          <Button
            size='icon'
            variant='rounded'
            className='bg-input-foreground w-12 h-12 absolute top-[-2px] right-[-10px]'
            onClick={onClose}
          >
            <CloseIcon className='text-secondary' />
          </Button>
        </div>
      </section>
    </main>
  )
}
