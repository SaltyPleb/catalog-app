import About from "../../pages/about/about";
import Catalog from "../../pages/catalog/catalog";
import Contact from "../../pages/contact/contact-me";
import Signin from "../../pages/sign-in/sing-in";
import Signup from "../../pages/sign-up/signup";
import { ABOUT_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/consts";

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
        Component: Signup
    },
    {
        path: SIGNIN_ROUTE,
        Component: Signin
    }
];
