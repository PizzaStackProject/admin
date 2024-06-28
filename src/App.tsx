import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import { authProvider } from "./core/auth-provider";
import { theme } from "@app/core/theme";
import { buildDataProvider } from "@app/core/data-provider";
import { MenuResource } from "./modules/menu/menu.resource";
import { OrderResource } from "./modules/orders/order.resource";
import { CategoryResource } from "./modules/categories/category.resource";
import { Dashboard } from "./modules/dashboard/components/dashboard/dashboard.component";

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
        dashboard={Dashboard}
      >
        <Resource {...MenuResource} />
        <Resource {...CategoryResource} />
        <Resource {...OrderResource} />
        <Resource name="order_status" />
        <Resource name="orders_menu" />
      </Admin>
    </>
  );
};
