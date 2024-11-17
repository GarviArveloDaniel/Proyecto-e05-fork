// src/types/express.d.ts or @types/express/index.d.ts
import { User } from '../models/userModel';

declare global {
  namespace Express {
    interface Request {
      user?: User; // Add user property to Request object
    }
  }
}
