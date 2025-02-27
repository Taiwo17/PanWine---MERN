import { doSocialLogin } from '@/app/actions'
import { Button } from '../ui/button'

const SocialLogin = () => {
  return (
    <form
      action={doSocialLogin}
      className='flex flex-col gap-4 items-center lg:pr-[200px]'
    >
      <div>
        <p className='text-primary-wine font-bold'>OR</p>
      </div>
      <Button
        className='bg-[#fff] border border-primary-wine  text-[18px] flex gap-2 px-[40px] text-primary-wine md:px-[50px] py-4 hover:bg-white'
        name='action'
        value='google'
        type='submit'
      >
        <span>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23.7636 9.7497C23.9167 10.553 24 11.3929 24 12.2694C24 19.1252 19.3177 24 12.2457 24C10.6374 24.0005 9.04482 23.6904 7.55888 23.0875C6.07295 22.4846 4.7228 21.6008 3.58558 20.4864C2.44837 19.372 1.54638 18.0489 0.931149 16.5928C0.31592 15.1366 -0.00048978 13.576 5.69059e-07 12C-0.00048978 10.424 0.31592 8.86335 0.931149 7.40723C1.54638 5.95111 2.44837 4.62805 3.58558 3.51365C4.7228 2.39925 6.07295 1.51535 7.55888 0.912467C9.04482 0.309581 10.6374 -0.000479954 12.2457 5.57642e-07C15.5522 5.57642e-07 18.315 1.1922 20.4348 3.128L16.9827 6.51077V6.50223C15.6977 5.30272 14.0669 4.68712 12.2457 4.68712C8.20525 4.68712 4.92116 8.0321 4.92116 11.9927C4.92116 15.9521 8.20525 19.3043 12.2457 19.3043C15.9117 19.3043 18.4071 17.2503 18.9196 14.4295H12.2457V9.7497H23.7649H23.7636Z'
              fill='#411530'
            />
          </svg>
        </span>
        Sign up with Google
      </Button>
    </form>
  )
}

export default SocialLogin
