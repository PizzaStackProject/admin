import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Admin,
  DataProvider,
  Edit,
  EditGuesser,
  Loading,
  Resource,
} from "react-admin";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "@app/modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@app/modules/menu/components/menu-create/menu-create.component";
import { authProvider } from "./core/auth-provider";
import { theme } from "@app/core/theme";

import { CategoriesList } from "./modules/categories/components/categories-list/categories-list";
import { CategoryEdit } from "./modules/categories/components/category-edit/category-edit";
import { CategoryCreate } from "./modules/categories/components/category-create/category-create";

import { OrderList } from "@app/modules/orders/components/order-list/order-list.component";
import { OrderShow } from "@app/modules/orders/components/order-show/order-show.component";
import { OrderEdit } from "@app/modules/orders/components/order-edit/order-edit.component";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { buildDataProvider } from "@app/core/data-provider";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const getDataProvider = async () => {
      const dp = await buildDataProvider();

      setDataProvider(dp);
    };

    getDataProvider();
  }, []);

  if (!dataProvider) return <Loading />;

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        requireAuth
        theme={theme}
      >
        <Resource
          name="menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          icon={RestaurantMenuIcon}
        />
        <Resource
          name="category"
          list={CategoriesList}
          edit={CategoryEdit}
          create={CategoryCreate}
          icon={CategoryIcon}
        />
        <Resource
          name="orders"
          list={OrderList}
          edit={OrderEdit}
          show={OrderShow}
          icon={ShoppingBagIcon}
        />
        <Resource name="order_status" />
        <Resource name="orders_menu" />
      </Admin>
    </>
  );
};
