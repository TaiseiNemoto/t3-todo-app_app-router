import { z } from 'zod';

export const createInput = z.object({
  newTodo: z
    .string()
    .min(1, 'todo must be at least 1 letter')
    .max(50, 'todo must be 50 letters or less'),
  userId: z.string(),
});
