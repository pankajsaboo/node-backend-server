import express from 'express';
import userRoutes from './users';
import authenticationRoutes from './authenticate';
import interceptor from './../authentication-interceptor';

const router = express.Router();
router.use('/authenticate', authenticationRoutes);

router.use(interceptor);

//All routers should be attached after this only
router.use('/users', userRoutes);

//Error handler should be last one always
export default router;