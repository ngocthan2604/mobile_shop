import routes from '~/config/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import ProductLayout from '~/layouts/ProductLayout';
import ProductDetailLayout from '~/layouts/ProductDetailLayout';

import { Audio, Home, Laptop, Mobile, Tablets, Tivi, WearableTech, Main, ProductDetail, Search, Sale } from '~/pages';

const publicRoutes = [
    { path: routes.default, component: Main, layout: DefaultLayout },
    { path: routes.audio, component: Audio, layout: ProductLayout },
    { path: routes.home, component: Home, layout: ProductLayout },
    { path: routes.laptop, component: Laptop, layout: ProductLayout },
    { path: routes.mobile, component: Mobile, layout: ProductLayout },
    { path: routes.tablets, component: Tablets, layout: ProductLayout },
    { path: routes.tivi, component: Tivi, layout: ProductLayout },
    { path: routes.wearable, component: WearableTech, layout: ProductLayout },
    { path: routes.productdetail, component: ProductDetail, layout: ProductDetailLayout },
    { path: routes.search, component: Search, layout: ProductLayout },
    { path: routes.sale, component: Sale, layout: ProductLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
