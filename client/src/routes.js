import Dashboard from './pages/Dashboard';
import AddListProject from './pages/AddListProject';

const ROUTES = [
  {
    exact: true,
    path: '/dashboard',
    name: 'Dashboard',
    key: 'dashboard',
    component: Dashboard,
    layoutProps: {
      disableHeader: false,
      disableSider: false,
      disableFooter: false,
    },
  },
  {
    exact: true,
    path: '/add-list-project',
    name: 'Add List Project',
    key: 'add-list-project',
    component: AddListProject,
    layoutProps: {
      disableHeader: false,
      disableSider: false,
      disableFooter: true,
    },
  },
];

export default ROUTES;
