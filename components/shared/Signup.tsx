'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Form } from 'react-hook-form'
import { userDefaultValue } from '@/constants'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { userFormSchema } from '@/lib/validator/user.validator'
import { FiEye, FiEyeOff } from 'react-icons/fi'

type SignupProps = {
  serializedUser: string | null
}
const Signup: React.FC<SignupProps> = ({ serializedUser }) => {
  const user = serializedUser ? JSON.parse(serializedUser) : null

  const [showPassword, setShowPassword] = React.useState(false)

  const initialValue = userDefaultValue

  // 1. Define your form.
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: initialValue,
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof userFormSchema>) {
    console.log(values)
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input
                    className='input-field'
                    placeholder='Full Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input
                    className='input-field'
                    placeholder='Phone Number'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input
                    className='input-field'
                    placeholder='Email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='mb-[40px]'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        className='border-0 input-field'
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                      />
                      {showPassword ? (
                        <FiEyeOff
                          onClick={() => setShowPassword(false)}
                          className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400'
                        />
                      ) : (
                        <FiEye
                          onClick={() => setShowPassword(true)}
                          className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400'
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-end justify-end mb-[30px] '>
            <Link href='/forget-password'>
              <p className='text-primary-wine text-base text-end md:font-medium md:text-[20px]'>
                Forgot Password?
              </p>
            </Link>
          </div>

          <div className='flex items-center justify-center'>
            <Button
              className='bg-primary-wine px-[50px] md:px-[100px] py-4 hover:bg-primary-wine'
              type='submit'
            >
              Create Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Signup
