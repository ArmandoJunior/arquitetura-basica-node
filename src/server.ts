/* eslint-disable import/no-unresolved */
import express from 'express';
// eslint-disable-next-line import/extensions
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333 🚀');
});
