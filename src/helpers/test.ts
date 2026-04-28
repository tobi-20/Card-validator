import { checkLuhn } from './luhn';

describe('checkLuhn', () => {
  it('should reject string literals that return false', () => {
    expect(checkLuhn('123')).toBeFalsy();
  });

  it('should return true  for  valid string literals string', () => {
    const isValid = checkLuhn('4242424242424242');
    expect(isValid).toBe(true);
  });
});
