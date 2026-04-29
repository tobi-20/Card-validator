import { checkLuhn } from '../lib/luhn';
import { ValidateCardInput } from '../schema/schema';
import { ServiceResult } from '../types/card.types';

export function validateCardService(input: ValidateCardInput): ServiceResult {
  if (!checkLuhn(input.cardNumber)) {
    return { ok: false, reason: 'Failed Luhn check' };
  }

  return { ok: true, cardNumber: input.cardNumber };
}
