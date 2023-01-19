import Router from 'express';
import router from './HelloRoutes';

import HelloRoute from './HelloRoutes';

router.use('/hello', HelloRoute);

export default router;
