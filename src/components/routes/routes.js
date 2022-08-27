import About from "../../pages/about/about";
import Catalog from "../../pages/catalog/";
import Contact from "../../pages/contact/Contact";
import Auth from "../../pages/auth/auth";
import Main from "../../pages/";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  MAIN_CONSTRUCTOR,
  CATALOG_HISTORY,
  CATALOG_LIKES,
  CATALOG_ROUTE,
  CONSTRUCTOR_DASHBOARD_ROUTE,
  CONSTRUCTOR_LIBRARY_ROUTE,
  CONSTRUCTOR_SETTINGS_ROUTE,
  CONSTRUCTOR_SYSTEMS_ROUTE,
  CONTACT_ROUTE,
  DEVICE_ROUTE,
  MAIN_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from "../../utils/consts";
import Constructor from "../../pages/constructor/";
import DevicePage from "../../pages/device-page/DevicePage";
import Admin from "../../pages/admin/Admin";
import Favorite from "../../pages/favorite/Favorite";
import History from "../../pages/history/History";
import ClientSystem from "../../pages/constructor/ClientSystem";
import Library from "../../pages/constructor/Library";
import Settings from "../../pages/constructor/Settings";
import Dashboard from "../../pages/constructor/Dashboard";
import SystemsList from "../../pages/constructor/SystemsList";

export const authRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: SIGNUP_ROUTE,
    Component: Auth,
  },
  {
    path: SIGNIN_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: CATALOG_LIKES,
    Component: Favorite,
  },
  {
    path: CATALOG_HISTORY,
    Component: History,
  },
  {
    path: MAIN_CONSTRUCTOR,
    Component: Constructor,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: SIGNUP_ROUTE,
    Component: Auth,
  },
  {
    path: SIGNIN_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: CATALOG_LIKES,
    Component: Favorite,
  },
  {
    path: CATALOG_HISTORY,
    Component: History,
  },
  {
    path: MAIN_CONSTRUCTOR,
    Component: Constructor,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const constructorRoutes = [
  {
    path: CONSTRUCTOR_DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: CONSTRUCTOR_SYSTEMS_ROUTE,
    Component: SystemsList,
  },
  {
    path: CONSTRUCTOR_SYSTEMS_ROUTE + "/:id",
    Component: ClientSystem,
  },
  {
    path: CONSTRUCTOR_LIBRARY_ROUTE,
    Component: Library,
  },
  {
    path: CONSTRUCTOR_SETTINGS_ROUTE,
    Component: Settings,
  },
]
