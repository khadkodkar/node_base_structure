import express from 'express';
import userRouter from './account';
const apiRoutes = express();

apiRoutes.use('/account', userRouter);
export default apiRoutes;