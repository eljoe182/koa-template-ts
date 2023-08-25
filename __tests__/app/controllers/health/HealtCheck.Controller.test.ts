import { HealthDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import HealthCheckController from '@controllers/health/HealthCheck.Controller';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { Context } from 'koa';

const useCase: IBaseUseCase = container.get('Health.UseCase.GetStatus');
const controllerDependency: IBaseController = container.get('Health.Controller.GetStatus');
let controller: HealthCheckController;

describe('HealthCheck.Controller: ', () => {
  beforeEach(() => {
    controller = new HealthCheckController(useCase);
  });

  it('should what dependency and class is same', () => {
    expect(controllerDependency).toBeInstanceOf(HealthCheckController);
    expect(controller).toBeInstanceOf(HealthCheckController);
  });

  it('should execute controller', async () => {
    const ctx: Context = {} as unknown as Context;
    const result = await controller.run(ctx);
    expect(result).toBe(void 0);
  });
});
