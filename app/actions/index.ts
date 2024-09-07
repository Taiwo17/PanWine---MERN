'use server'

import { signIn, signOut } from '@/app/auth'

export async function doSocialLogin(formData: any) {
  const actions = formData.get('action')
  await signIn(actions, { redirectTo: '/' })
}

export async function doLogOut() {
  await signOut({ redirectTo: '/' })
}
