import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Competitions',
    url: '/competitions',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];
