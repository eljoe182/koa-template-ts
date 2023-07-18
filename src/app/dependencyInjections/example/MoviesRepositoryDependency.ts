import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency'

import { MongoMovieRepository } from '@features/example/infrastructure/persistance/MongoMovieRepository';

container.register('Movies.Repository', MongoMovieRepository)
  .addArgument(new Reference('Shared.Connection.Mongo'));

export default container;
