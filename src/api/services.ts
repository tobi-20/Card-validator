import { ValidateCardInput } from '../schema/schema';

export function validateCardService(input: ValidateCardInput) {
  if (!input) {
    throw new Error('Card number required');
  }
  return { valid: true, cardNumber: input };
}
