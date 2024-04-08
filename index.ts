import dotenv from 'dotenv';

dotenv.config();

import app from './src/app';

const port = parseInt(process.env.APP_PORT ?? '5000', 10);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
