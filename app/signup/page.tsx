// 'use client'
import Link from 'next/link'
import SocialLogin from '@/components/shared/SocialLogin'
import Signup from '@/components/shared/Signup'
import { auth } from '../auth'

const Page = async () => {
  type User = {
    user?: string
    email?: string
    image?: string
  }

  const session = await auth() // server-s

  const user: User | undefined = session?.user

  const serializedUser = user ? JSON.stringify(user) : null

  return (
    <section className='flex flex-col gap-0 min-h-screen md:flex-row md:gap-8'>
      <div className='hidden w-full md:flex md:bg-login-pattern md:h-[720px] md:bg-no-repeat md:bg-cover'>
        <h1 className='md:text-[48px] md:pt-[54px]  md:pl-[54px] text-white md:font-bold md:leading-[60px]'>
          PanWines
        </h1>
      </div>
      <div className='pt-[64px] w-full mb-[50px] md:mb-0'>
        <div className='px-8 md:px-0 mb-[40px]'>
          <div>
            <h2 className='text-primary-wine  text-[32px] font-medium mb-[30px] md:mb-[50px] md:font-bold'>
              Create an account
            </h2>
          </div>
          <div className='lg:pr-[200px]'>
            <Signup serializedUser={serializedUser} />
          </div>
        </div>
        <div>
          <SocialLogin />
        </div>
      </div>
    </section>
  )
}

export default Page
