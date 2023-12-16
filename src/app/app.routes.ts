import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      },
    //   children: [
    //     {
    //       path: 'dashboard',
    //       loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
    //     },
    //     {
    //       path: 'theme',
    //       loadChildren: () => import('./views/theme/theme.module').then((m) => m.ThemeModule),
    //     },
    //     {
    //       path: 'base',
    //       loadChildren: () => import('./views/base/base.module').then((m) => m.BaseModule),
    //     },
    //   ],
  },
];
