export interface MenuItemInterface {
  title: string;
  address: string;
  Icon: JSX.Element;
}

export interface NavBarItemInterface
  extends Omit<MenuItemInterface, "Icon" | "address"> {
  param: String;
  fetchFunction: () => void;
}

export interface searchParams {
  genre: String;
}

export interface moviesInterface {
  id: number;
  title: string;
  name?: string;
  first_air_date?: string;
  release_date?: string;
  poster_path?: string;
  overview?: string;
  backdrop_path?: string;
  vote_average?: number;
  vote_count?: number;
}
