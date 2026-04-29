import { validateCardService } from '../card/services';

describe('validateCardService', () => {
  it('should reject invalid input', () => {
    const result = validateCardService({ cardNumber: '4242424242424241' });
    expect(result.ok).toBe(false);
  });

  it('should accept valid input', () => {
    const result = validateCardService({ cardNumber: '4242424242424242' });
    expect(result.ok).toBe(true);
  });
});
