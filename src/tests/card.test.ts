import { validateCardService } from '../card/services';

describe('validateCardService', () => {
  it('should reject invalid input', () => {
    const result = validateCardService({ cardNumber: '' });
    expect(result.valid).toBe(false);
  });

  it('should accept valid input', () => {
    const result = validateCardService({ cardNumber: '4242424242424242' });
    expect(result.valid).toBe(true);
  });
});
