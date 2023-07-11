import { IBaseUseCase } from '../../../shared/infrastructure/interfaces/BaseUseCase';

export default class GetStatusUseCase implements IBaseUseCase {
  execute(): Promise<unknown> {
    return Promise.resolve({ status: 'OK' });
  }
}