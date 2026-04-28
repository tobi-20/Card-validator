import z from 'zod';

export const validateCardSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d+$/, 'Card number must be numeric')
    .min(13)
    .max(19),
});

export type ValidateCardInput = z.infer<typeof validateCardSchema>;
