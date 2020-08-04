import { Router } from 'express';
import * as passport from 'passport';
import type { ReqUser } from '../../utils/types';

const router = Router();

/* GET /api/lulz */
router.get('/', passport.authorize('jwt'), (req, res) => {
	console.log(req.user);
	res.json({ msg: 'LULZ' });
});

router.post('/', passport.authorize('jwt'), async (req: ReqUser, res) => {

	const newBlog = req.body;
	const authorid = req.user.id;

	try {
		//const result = await db.blogs.insert(newBlog.title, newBlog.content, authorid);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'my code sux', error })
	}
});

export default router;
