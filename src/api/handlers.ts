import type { Request, Response } from 'express';
import { validateCardService } from './services';
import { validateCardSchema } from '../schema/schema';
import { ZodError } from 'zod';
class CardHandler {
  ValidateCard = (req: Request, res: Response) => {
    try {
      const result = validateCardSchema.parse(req.body);
      const { cardNumber } = validateCardService(result);
      res.status(200).json({ ok: true, cardNumber });
      return;
    } catch (err: any) {
      if (err instanceof ZodError) {
        res.status(400).json({
          ok: false,
          errors: 'Invalid: input digits should be between 13 to 19 digits',
        });
        return;
      }
      res.status(500).json({ ok: false, error: (err as Error).message });
      return;
    }
  };
}
export const cardHandler = new CardHandler();
