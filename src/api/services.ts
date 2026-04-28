import { checkLuhn } from '../helpers/luhn';
import { ValidateCardInput } from '../schema/schema';

export function validateCardService(input: ValidateCardInput) {
  if (!checkLuhn(input.cardNumber)) {
    throw new Error('Card number invalid');
  }

  return { valid: true, cardNumber: input.cardNumber };
}
