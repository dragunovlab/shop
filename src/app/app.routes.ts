import { Routes } from '@angular/router';
import { LayoutPage } from '../pages/layout/layout.page';
import { CatalogPage } from '../pages/catalog/catalog.page';

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
            }
        ]
    }
];
