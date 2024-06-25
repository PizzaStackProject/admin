import { ResourceProps } from "react-admin";
import { CategoriesList } from "./components/categories-list/categories-list";
import { CategoryCreate } from "./components/category-create/category-create";
import { CategoryEdit } from "./components/category-edit/category-edit";

import CategoryIcon from "@mui/icons-material/Category";

export const CategoryResource: ResourceProps = {
  name: "category",
  list: CategoriesList,
  edit: CategoryEdit,
  create: CategoryCreate,
  options: { label: "Categories" },
  icon: CategoryIcon,
};
