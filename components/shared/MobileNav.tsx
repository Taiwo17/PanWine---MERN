import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FiAlignRight } from 'react-icons/fi'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import NavItems from './NavItems'

const MobileNav = async () => {
  return (
    <nav className=''>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <FiAlignRight className='text-white h-6 w-6' />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-4 md:hidden bg-primary-wine'>
          <SheetTitle>
            <Link href='/'>
              <p className='text-[25px] font-bold md:text-[32px] text-white'>
                PanWines
              </p>
            </Link>
          </SheetTitle>
          <Separator className='border border-white' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
