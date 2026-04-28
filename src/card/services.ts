import { checkLuhn } from '../helpers/luhn';
import { ValidateCardInput } from '../schema/schema';

export function validateCardService(input: ValidateCardInput) {
  if (!checkLuhn(input.cardNumber)) {
    return { valid: false, reason: 'Failed Luhn check' };
  }

  return { valid: true, cardNumber: input.cardNumber };
}
