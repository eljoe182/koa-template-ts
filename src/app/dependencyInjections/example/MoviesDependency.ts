import { Reference } from 'node-dependency-injection';
import container from '@dependency'

import FindMoviesController from '@controllers/example/FindMovies.Controller';
import FindMoviesUseCase from '@features/example/application/FindMovies.UseCase';

container.register('Movies.UseCase.Find', FindMoviesUseCase).addArgument(new Reference('Movies.Repository'));
container.register('Movies.Controller.Find', FindMoviesController).addArgument(new Reference('Movies.UseCase.Find'));

export default container;
