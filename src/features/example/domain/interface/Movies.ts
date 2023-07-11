interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

interface Imdb {
  rating: number;
  votes: number;
  id: number;
}

interface Viewer {
  rating: number;
  numReviews: number;
  meter: number;
}

interface Tomatoes {
  viewer: Viewer;
  lastUpdated: Date;
}

export interface Movies {
  plot: string;
  fullplot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  countries: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: Awards;
  lastupdated: Date;
  year: number;
  imdb: Imdb;
  type: string;
  tomatoes: Tomatoes;
}

