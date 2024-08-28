import { Separator } from '../ui/separator'
import { Sheet } from '../ui/sheet'
import { NavLinks } from './nav-links'
import { TeamSelection } from './team-selection'

export const SideNav = () => {
  return (
    <div className='flex flex-col pt-10 gap-2.5'>
      <section className='flex flex-col gap-[30px] px-5'>
        <TeamSelection />
        <Separator className='px-5' />
      </section>

      <div>
        <Sheet>
          <NavLinks />
        </Sheet>
      </div>
    </div>
  )
}
