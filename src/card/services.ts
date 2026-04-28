import { checkLuhn } from '../lib/luhn';
import { ValidateCardInput } from '../schema/schema';

export function validateCardService(input: ValidateCardInput) {
  if (!checkLuhn(input.cardNumber)) {
    return { ok: false, reason: 'Failed Luhn check' };
  }

  return { ok: true, cardNumber: input.cardNumber };
}
