import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CompetitionsComponent } from './views/competitions/competitions.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'competitions',
      pathMatch: 'full',
    },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'competitions',
        component: CompetitionsComponent,
      },
    ],
  },
];
