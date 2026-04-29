import type { Request, Response } from 'express';
import { validateCardService } from '../services/card.service';
import { validateCardSchema } from '../schema/schema';
import { ZodError } from 'zod';

class CardHandler {
  ValidateCard = (req: Request, res: Response) => {
    try {
      const result = validateCardSchema.parse(req.body);

      const serviceResult = validateCardService(result);
      if (!serviceResult.ok) {
        return res.status(400).json({
          ok: false,
          reason: serviceResult.reason,
        });
      }

      res.status(200).json(serviceResult);
      return;
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        res.status(400).json({
          ok: false,
          errors: err.issues[0]?.message,
        });
        return;
      }
      res.status(500).json({ ok: false, error: (err as Error).message });
      return;
    }
  };
}
export const cardHandler = new CardHandler();
