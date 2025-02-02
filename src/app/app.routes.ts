import { Routes } from '@angular/router';
import { LayoutPage } from '../pages/layout/layout.page';
import { CatalogPage } from '../pages/catalog/catalog.page';
import { ProductDetailngPage } from '../pages/product-detailng/product-detailng.page';
import { AboutPage } from '../pages/about/about.page';

export const routes: Routes = [
    {
        path: '',
        component: LayoutPage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'catalog',
            },
            {
                path: 'catalog',
                component: CatalogPage
            },
            {
                path: 'catalog/:id',
                component: ProductDetailngPage
            },
            {
                path: 'about',
                component: AboutPage
            }
        ]
    }
];
