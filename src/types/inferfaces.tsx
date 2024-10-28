import { IconType } from "react-icons";

export interface MenuItemInterface {
  title: string;
  address: string;
  Icon: IconType;
}

export interface NavBarItemInterface extends Omit<MenuItemInterface, "Icon"> {}
