import Link from 'next/link'
import NavItems from './NavItems'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { doLogOut } from '@/app/actions'
import { useState } from 'react'
// import { doLogOut } from '@/app/actions'

const Header = async () => {
  // const [showDropdown, setShowDropdown] = useState(true)

  // Session User
  // const session = await auth()

  // const user = session?.user

  // if (!user) return redirect('/login')

  /*   function handleDropdown() {
    setShowDropdown(!showDropdown)
  } */

  // console.log('This is session', session)

  return (
    <header className='w-full h-[60px] flex items-center  bg-primary-wine md:h-[100px]'>
      <div className='wrapper flex items-ceniter justify-between md:px-[64px]'>
        <Link className='flex items-center' href='/'>
          <p className='text-[25px] font-bold md:text-[32px] text-white'>
            PanWines
          </p>
        </Link>

        <nav className='hidden md:flex'>
          <NavItems />
        </nav>

        <div className='flex items-center md:hidden'>
          <MobileNav />
        </div>

        {/* {!user ? (
          <div className='hidden md:flex md:gap-4'>
            <Button className='bg-white text-primary-wine' asChild>
              <Link className='p-regular-20' href='/login'>
                Login
              </Link>
            </Button>

            <Button className='bg-white text-primary-wine pxpx' asChild>
              <Link className='p-regular-20' href='/sign-up'>
                Sign Up
              </Link>
            </Button>
          </div>
        ) : (
          <div className='hidden md:relative md:flex md:items-center'>
            <div onClick={handleDropdown}>
              <Image
                src={session?.user?.image || '/assets/avatar.svg'}
                alt='User avatar'
                width={28}
                height={28}
                className='rounded-[50%] cursor-pointer p-1 ring-2 ring-white'
              />
            </div>
            {showDropdown && (
              <div className='absolute flex items-center mt-[160px] rounded-lg bg-white p-[20px] px-10 py-10 right-0 z-10'>
                <form action={doLogOut}>
                  <Button>Logout</Button>
                </form>
              </div>
            )}
          </div>
        )} */}
      </div>
    </header>
  )
}

export default Header
