import { Router } from 'express';
import appointmentsRoutes from './appointments.routes';
import userRouter from './users.routes';
import sessinsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', userRouter);
routes.use('/sessions', sessinsRouter);

export default routes;
