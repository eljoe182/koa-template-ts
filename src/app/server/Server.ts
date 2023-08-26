import * as http from 'http';
import { hostname } from 'os';
import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';
import { registerRoutes } from '@routes';
import Logger from '@shared/domain/interfaces/Logger';
import { PersistanceDependency as container } from '@dependencies';
import helmet from 'koa-helmet';

export class Server {
  private readonly port: number;
  private httpServer?: http.Server;
  private app: Koa;
  private logger: Logger;

  constructor(port: number) {
    this.logger = container.get('Shared.Logger');
    this.port = port;
    this.app = new Koa();
    const router = new Router();
    this.app.use(bodyParser());
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.noSniff());
    this.app.use(helmet.hidePoweredBy());
    this.app.use(helmet.frameguard({ action: 'deny' }));
    this.app.use(
      cors({
        origin: '*',
      })
    );
    this.app.use(logger());
    registerRoutes(router);
    this.app.use(router.routes());
  }

  start = async (): Promise<void> => {
    return new Promise((resolve) => {
      this.httpServer = this.app.listen(this.port, () => {
        this.logger.info(`Server is running at ${hostname}:${this.port}`);
        resolve();
      });
    });
  };

  stop = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  };

  getHTTPServer = () => {
    return this.httpServer;
  };
}
