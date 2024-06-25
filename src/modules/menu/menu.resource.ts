import { MenuList } from "@mui/material";
import { MenuEdit } from "./components/menu-edit/menu-edit.component";
import { MenuCreate } from "./components/menu-create/menu-create.component";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { ResourceProps } from "react-admin";

export const MenuResource: ResourceProps = {
  name: "menu",
  list: MenuList,
  edit: MenuEdit,
  create: MenuCreate,
  options: { label: "Menu" },
  icon: RestaurantMenuIcon,
};
