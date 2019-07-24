import express from 'express';
import entrepreneurRoutes from './src/routes/entrepreneurRoutes';
const app = express();

entrepreneurRoutes(app)
export default app;