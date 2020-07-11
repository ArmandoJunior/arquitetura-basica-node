/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
