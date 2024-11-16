import { IconType } from "react-icons";

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
  release_date?: string;
  vote_average?: number;
  poster_path?: string;
  overview?: string;
}
