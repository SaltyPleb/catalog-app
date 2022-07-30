import About from "../../pages/about/about";
import Catalog from "../../pages/catalog/";
import Contact from "../../pages/contact/Contact";
import Auth from "../../pages/auth/auth";
import Main from "../../pages/";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CATALOG_CONSTRUCTOR,
  CATALOG_HISTORY,
  CATALOG_LIKES,
  CATALOG_ROUTE,
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
    path: CATALOG_CONSTRUCTOR,
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
    path: CATALOG_CONSTRUCTOR,
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
