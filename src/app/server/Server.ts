import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';
import { registerRoutes } from '@routes';

export class Server {
  private readonly port: number;
  private app: Koa;

  constructor(port: number) {
    this.port = port;
    this.app = new Koa();
    const router = new Router();
    this.app.use(bodyParser());
    this.app.use(
      cors({
        origin: '*',
      })
    );
    this.app.use(logger());
    registerRoutes(router);
    this.app.use(router.routes());
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
