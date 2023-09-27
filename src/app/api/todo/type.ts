import { z } from 'zod';

const zTodo = z.object({
  id: z.string(),
  text: z.string(),
  isCompleted: z.boolean(),
});

export const createInput = z.object({
  newTodo: z
    .string()
    .min(1, 'todo must be at least 1 letter')
    .max(50, 'todo must be 50 letters or less'),
  userId: z.string(),
});

export const updateInput = z.object({
  id: z.string(),
  text: z
    .string()
    .min(1, 'todo must be at least 1 letter')
    .max(50, 'todo must be 50 letters or less'),
  is_completed: z.boolean(),
});

export const toggleInput = z.object({
  id: z.string(),
  is_completed: z.boolean(),
});

export type Todo = z.infer<typeof zTodo>;
