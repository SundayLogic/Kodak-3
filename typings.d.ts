export interface Genre {
  genre_ids?: [number] | number;
}
export interface Movies extends Genre {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Series extends Genre {
  backdrop_path?: string;
  first_air_date: string;
  id: number;
  name: string;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface Trending extends Genre {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
