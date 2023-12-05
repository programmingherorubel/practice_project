import { z } from 'zod'

export const Guardian = z.object({
  fathersName:z.string().optional(),
  mothersName:z.string().optional()
})

export const facultyValidation = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['Faculty', 'Admin']).default('Faculty'),
  status: z.enum(['active', 'blocked']).optional(),
})


export const facultyValidationUpdate = z.object({
  id: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  role: z.enum(['Faculty', 'Admin']).default('Faculty').optional(),
  status: z.enum(['active', 'blocked']).optional().optional(),
  address:z.string().optional(),
  Guardian:z.string().optional(),
  phoneNumber:z.string().optional()
})