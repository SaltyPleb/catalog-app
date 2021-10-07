import About from "../../pages/about/about";
import Catalog from "../../pages/catalog/catalog";
import Contact from "../../pages/contact/contact-me";
import Auth from "../../pages/auth/auth";
import Main from "../../pages/";
import { ABOUT_ROUTE, CATALOG_CONSTRUCTOR, CATALOG_HISTORY, CATALOG_LIKES, CATALOG_ROUTE, CONTACT_ROUTE, MAIN_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/consts";

export const authRoutes = [
    
];

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: SIGNUP_ROUTE,
        Component: Auth
    },
    {
        path: SIGNIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CATALOG_LIKES,
        Component: Main
    },
    {
        path: CATALOG_HISTORY,
        Component: Main
    },
    {
        path: CATALOG_CONSTRUCTOR,
        Component: Main
    }
];
