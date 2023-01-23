import { z } from 'zod'

export const maritalStatuses = [
  'single',
  'married',
  'divorced',
  'widowed',
] as const

export type MaritalStatus = typeof maritalStatuses[number]

export const mappedMaritalStatuses: { [key in MaritalStatus]: string } = {
  single: 'Single',
  married: 'Married',
  divorced: 'Divorced',
  widowed: 'Widowed',
}

export const userInfoSchema = z.object({
  email: z.string().email({ message: 'An email is required.' }),
  name: z.string().min(1, { message: 'A first name is required.' }).max(100),
  alias: z
    .string()
    .max(100)
    .transform((alias) => {
      if (alias === '') return null
      return alias
    }),
  dateOfBirth: z
    .string()
    .refine((date) => new Date(date).toString() !== 'Invalid Date', {
      message: 'A valid date of birth is required.',
    })
    .transform((date) => new Date(date)),
  weight: z
    .string()
    .refine((weight) => !isNaN(parseFloat(weight)), {
      message: 'A weight is required.',
    })
    .transform((weight) => Number(weight)),
  maritalStatus: z.enum(maritalStatuses, {
    errorMap: () => ({ message: 'Please select your marital status.' }),
  }),
})
