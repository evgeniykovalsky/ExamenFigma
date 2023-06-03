import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE,REGISTRATION_ROUTE,PRODUCT_ROUTE,CONTACTS,CATALOGCOFFE_ROUTE, INDEX_ROUTE, UNKNOWN_ROUTE } from "./utils/consts";
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Main from './components/Main';
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import MainCatalogCoffee from './components/MainCatalogCoffee';
import Contacts from "./components/Contacts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },

    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Main/>
    },
    {
        path: INDEX_ROUTE,
        Component: <Main/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: PRODUCT_ROUTE +'/:id',
        Component: <ProductPage/>
    },
    {
        path: CATALOGCOFFE_ROUTE,
        Component: <MainCatalogCoffee/>},
    {
        path: UNKNOWN_ROUTE,
        Component: <Contacts/>},
    {
        path: CONTACTS,
        Component: <Contacts/>}
   
]