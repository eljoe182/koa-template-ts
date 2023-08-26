import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { Server } from '@app/server/Server';
import config from '@app/config';

export let application: Server;

BeforeAll(async () => {
  application = new Server(Number(config.PORT));
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
