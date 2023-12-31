import { Server } from '@app/server/Server';
import config from '@app/config';

try {
  const port = parseInt(config.PORT);
  new Server(port).start();
} catch (error) {
  console.log(error);
  process.exit(1);
}
