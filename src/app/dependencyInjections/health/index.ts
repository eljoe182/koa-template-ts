import { Reference } from 'node-dependency-injection';
import container from '../../../shared/infrastructure/dependency';

import HealthCheckController from '../../controllers/health/HealthCheck.Controller';
import GetStatusUseCase from '../../../features/health/application/GetStatus.UseCase';

container.register('Health.UseCase.GetStatus', GetStatusUseCase);

container
  .register('Health.Controller.GetStatus', HealthCheckController)
  .addArgument(new Reference('Health.UseCase.GetStatus'));

export default container;
