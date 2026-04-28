import { validateCardSchema } from './schema';

describe('validateCardSchema', () => {
  it('should reject numbers', () => {
    expect(() => validateCardSchema.parse({ cardNumber: 123 })).toThrow();
  }); // failure case

  it('should accept valid string', () => {
    const data = validateCardSchema.parse({
      cardNumber: '1232222222222222222',
    });

    expect(data.cardNumber).toBe('1232222222222222222');
  }); //happy path
});
