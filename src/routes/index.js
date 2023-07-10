import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/profile',
    component: Profile,
  },
  ,
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
