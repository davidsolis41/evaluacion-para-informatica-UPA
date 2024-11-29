import { validationResult} from "express-validator";
import type { NextFunction, Request, Response } from "express";
import type { Result, ValidationError } from "express-validator";

export default function validacionErrores(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors });
  }

  next();
}