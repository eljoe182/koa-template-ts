import { HealthDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import GetStatusUseCase from '@features/health/application/GetStatus.UseCase';

const useCaseDependency: IBaseUseCase = container.get('Health.UseCase.GetStatus');
let useCase: GetStatusUseCase;

describe('GetStatus.UseCase', () => {

  beforeEach(() => {
    useCase = new GetStatusUseCase();
  })

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(GetStatusUseCase);
    expect(useCase).toBeInstanceOf(GetStatusUseCase);
  });

  it('should return status', async () => {
    const result = await useCase.execute();
    expect(result).toEqual({ status: 'OK' });
  });
});
