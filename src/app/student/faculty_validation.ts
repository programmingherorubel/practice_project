import { z } from 'zod'

export const facultyValidation = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['Faculty', 'Admin']).default('Faculty'),
  status: z.enum(['active', 'blocked']).optional(),
})
