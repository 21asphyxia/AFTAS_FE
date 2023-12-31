import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CompetitionsComponent } from './views/competitions/competitions.component';
import { CompetitionsRankingsComponent } from './views/competitions-rankings/competitions-rankings.component';
import { MembersComponent } from './views/members/members.component';
import { PodiumComponent } from './views/podium/podium.component';

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
        path: 'members',
        component: MembersComponent,
      },
      {
        path: 'competitions',
        component: CompetitionsComponent,
      },
      {
        path: 'competitions/:id',
        component: CompetitionsRankingsComponent,
      },
      {
        path: 'podium/:id',
        component: PodiumComponent,
      },
    ],
  },
];
