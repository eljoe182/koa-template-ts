import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Pagination } from '@shared/infrastructure/interfaces/Pagination';
import { MovieRepository } from '../infrastructure/interface/MovieRepository';

export default class FindMoviesUseCase implements IBaseUseCase {
  constructor(private repository: MovieRepository) {}

  async execute(params: Pagination): Promise<unknown> {
    return this.repository.findAll(params);
  }
}