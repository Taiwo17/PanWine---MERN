import Link from 'next/link'
import NavItems from './NavItems'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full h-[60px] flex items-center  bg-primary-wine md:h-[100px]'>
      <div className='wrapper flex items-center justify-between md:px-[64px]'>
        <Link className='flex items-center' href='/'>
          <p className='text-[25px] font-bold md:text-[32px] text-white'>
            PanWines
          </p>
        </Link>

        <nav className='hidden md:flex'>
          <NavItems />
        </nav>

        <div className='md:hidden'>
          <MobileNav />
        </div>

        <div className='hidden md:flex md:gap-4'>
          <Button className='bg-white text-primary-wine' asChild>
            <Link className='p-regular-20' href='/login'>
              Login
            </Link>
          </Button>

          <Button className='bg-white text-primary-wine' asChild>
            <Link className='p-regular-20' href='/sign-up'>
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
