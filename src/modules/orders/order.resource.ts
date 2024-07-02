import { ResourceProps } from "react-admin";
import { OrderCreate } from "./components/order-create/order-create.component";
import { OrderEdit } from "./components/order-edit/order-edit.component";
import { OrderList } from "./components/order-list/order-list.component";
import { OrderShow } from "./components/order-show/order-show.component";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const OrderResource: ResourceProps = {
  name: "orders",
  list: OrderList,
  edit: OrderEdit,
  show: OrderShow,
  create: OrderCreate,
  icon: ShoppingBagIcon,
};
