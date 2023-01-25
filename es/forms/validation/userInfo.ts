import { z } from 'zod'

export const maritalStatuses = [
  'single',
  'married',
  'divorced',
  'widowed',
] as const

export type MaritalStatus = typeof maritalStatuses[number]

export const mappedMaritalStatuses: { [key in MaritalStatus]: string } = {
  single: 'Soltero',
  married: 'Casado',
  divorced: 'Divorciado',
  widowed: 'Viudo',
}

export const userInfoSchema = z.object({
  email: z.string().email({ message: 'El correo electrónico es requerido.' }),
  name: z.string().min(1, { message: 'El nombre es requerido.' }).max(100),
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
      message: 'La fecha de nacimiento es requerida.',
    })
    .transform((date) => new Date(date)),
  weight: z
    .string()
    .refine((weight) => !isNaN(parseFloat(weight)), {
      message: 'El peso es requerido.',
    })
    .transform((weight) => Number(weight)),
  maritalStatus: z.enum(maritalStatuses, {
    errorMap: () => ({ message: 'El estado civil es requerido' }),
  }),
})
