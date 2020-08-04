import { Router } from 'express';
import * as passport from 'passport';
import type { ReqUser } from '../../utils/types';

const router = Router();

/* GET /auth/token/verify */
router.get('/verify', passport.authorize('jwt'), (req, res) => res.sendStatus(200));

export default router;