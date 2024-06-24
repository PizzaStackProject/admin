import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Admin,
  DataProvider,
  Loading,
  Resource,
} from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "@app/modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@app/modules/menu/components/menu-create/menu-create.component";
import { authProvider } from "./core/auth-provider";
import { apolloClient } from "./core/apollo-client";
import { theme } from "@app/core/theme";
import { CategoriesList } from "./modules/categories/components/categories-list/categories-list";
import { CategoryEdit } from "./modules/categories/components/category-edit/category-edit";
import { CategoryCreate } from "./modules/categories/components/category-create/category-create";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        client: apolloClient,
      });
      setDataProvider(dp);
    };

    buildDataProvider();
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
        />
        <Resource
          name="category"
          list={CategoriesList}
          edit={CategoryEdit}
          create={CategoryCreate}
        />
      </Admin>
    </>
  );
};
