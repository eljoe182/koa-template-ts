import { IBaseUseCase } from '../../../shared/domain/BaseUseCase';

export default class GetStatusUseCase implements IBaseUseCase {
  execute(): Promise<unknown> {
    return Promise.resolve({ status: 'OK' });
  }
}