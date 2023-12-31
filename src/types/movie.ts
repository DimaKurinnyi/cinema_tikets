import { Actors } from './actors';
import { Country } from './country';
import { Session } from './session';

export interface IMovieCard {
  img: string;
  title: string;
  genre: string;
}

export interface Movie extends IMovieCard {
  id: number;
  description: string;
  times: string[];
  duration: number;
  country: Country;
  year: number;
  actors: Actors[];
  premier: string;
}
export interface MovieWithSessions extends Movie {
  sessions: Session[];
}
