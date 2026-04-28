import { validateCardService } from './services';

describe('validateCardService', () => {
  it('should reject invalid input', () => {
    expect(() => validateCardService({ cardNumber: '' })).toThrow();
  });

  it('should accept valid input', () => {
    const result = validateCardService({ cardNumber: '4242424242424242' });
    expect(result.valid).toBe(true);
  });
});
