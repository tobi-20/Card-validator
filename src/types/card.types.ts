export type ServiceResult =
  | { ok: true; cardNumber: string }
  | { ok: false; reason: string };
