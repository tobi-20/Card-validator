import { is } from 'zod/v4/locales';

function checkLun(n: string) {
  //"1234567895747374266"
  let i;
  let sum = 0;
  let isSecond = false;
  for (i = n.length - 1; i >= 0; i--) {
    let digit = Number(n[i]);
    if (isSecond) {
      digit = digit * 2;
      sum += digit % 10;
      sum += Math.floor(digit / 10);
    } else {
      sum += digit;
    }

    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}
