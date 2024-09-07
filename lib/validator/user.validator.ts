import * as z from 'zod'
import parsePhoneNumberFromString from 'libphonenumber-js'

const zPhone = z.string().transform((arg, ctx) => {
  const phone = parsePhoneNumberFromString(arg, {
    defaultCountry: 'NG',
    extract: false,
  })

  if (phone && phone.isValid()) {
    return phone.number
  }

  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: 'Invalid phone number',
  })

  z.NEVER
})
export const userFormSchema = z.object({
  fullName: z.string().min(3, 'Full name must be must than 4 characters long'),
  phoneNumber: zPhone,
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
})
