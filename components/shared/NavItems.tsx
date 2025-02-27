'use client'

import { Button } from '../ui/button'
import Link from 'next/link'

const NavItems = () => {
  // const pathname = usePathname()
  return (
    <ul className='flex flex-col gap-4 md:flex-row md:flex md:gap-8 md:justify-between md:items-center'>
      <li className='text-white p-regular-20'>
        <Link href='/'>Home</Link>
      </li>

      <li className='text-white p-regular-20'>
        <Link href='/product'>Product</Link>
      </li>

      <li className='text-white p-regular-20'>
        <Link className='flex items-center gap-1' href='/shopping-cart'>
          Shopping Cart
          <span>
            <svg
              width='32'
              height='28'
              viewBox='0 0 32 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M30.7373 19.8503H9.49549L10.562 17.7365L28.2831 17.7052C28.8824 17.7052 29.3961 17.2887 29.5031 16.7125L31.9572 3.34598C32.0214 2.99541 31.9251 2.63444 31.6897 2.36023C31.5733 2.22528 31.4282 2.11658 31.2643 2.04166C31.1005 1.96674 30.9219 1.9274 30.7408 1.92637L8.19708 1.85348L8.00446 0.971861C7.88318 0.40957 7.36239 0 6.77026 0H1.25917C0.925216 0 0.604942 0.129087 0.368802 0.358864C0.132662 0.588641 0 0.900285 0 1.22524C0 1.55019 0.132662 1.86184 0.368802 2.09161C0.604942 2.32139 0.925216 2.45048 1.25917 2.45048H5.75008L6.59191 6.34486L8.66436 16.1086L5.99621 20.3466C5.85765 20.5286 5.77419 20.7446 5.75528 20.9704C5.73637 21.1961 5.78276 21.4225 5.8892 21.6239C6.10322 22.0369 6.53483 22.2973 7.01282 22.2973H9.25293C8.77536 22.9145 8.51742 23.6662 8.51812 24.4388C8.51812 26.4034 10.159 28 12.1779 28C14.1969 28 15.8377 26.4034 15.8377 24.4388C15.8377 23.6648 15.5737 22.9116 15.1029 22.2973H20.8494C20.3718 22.9145 20.1139 23.6662 20.1146 24.4388C20.1146 26.4034 21.7554 28 23.7744 28C25.7933 28 27.4342 26.4034 27.4342 24.4388C27.4342 23.6648 27.1702 22.9116 26.6994 22.2973H30.7408C31.4328 22.2973 32 21.7489 32 21.072C31.9979 20.7474 31.864 20.4368 31.6274 20.2079C31.3909 19.979 31.0709 19.8504 30.7373 19.8503ZM8.72144 4.26925L29.2605 4.33519L27.2487 15.2964L11.1149 15.3242L8.72144 4.26925ZM12.1779 25.5356C11.5572 25.5356 11.0507 25.0428 11.0507 24.4388C11.0507 23.8349 11.5572 23.342 12.1779 23.342C12.7986 23.342 13.3051 23.8349 13.3051 24.4388C13.3051 24.7297 13.1863 25.0087 12.9749 25.2144C12.7636 25.4201 12.4769 25.5356 12.1779 25.5356ZM23.7744 25.5356C23.1537 25.5356 22.6472 25.0428 22.6472 24.4388C22.6472 23.8349 23.1537 23.342 23.7744 23.342C24.3951 23.342 24.9016 23.8349 24.9016 24.4388C24.9016 24.7297 24.7828 25.0087 24.5714 25.2144C24.36 25.4201 24.0733 25.5356 23.7744 25.5356Z'
                fill='white'
              />
            </svg>
          </span>
        </Link>
      </li>

      <div className='flex flex-col mt-[20px] items-start gap-3 md:hidden'>
        <Button
          className='bg-white text-primary-wine hover:bg-white hover:text-primary-wine'
          asChild
        >
          <Link className='p-regular-20' href='/login'>
            Login
          </Link>
        </Button>

        <Button
          variant='destructive'
          className='bg-white text-primary-wine hover:bg-white hover:text-primary-wine'
          asChild
        >
          <Link className='p-regular-20' href='/sign-up'>
            Sign Up
          </Link>
        </Button>
      </div>
    </ul>
  )
}

export default NavItems
