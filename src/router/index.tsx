import { Layout } from '../layout/index';
import { Home } from '../views/home/index';
import { Detail } from '../views/detail/index';
import { Resume } from '../views/resume/index';
import { Comments } from '../views/comments/index';

const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/resume',
        component: Resume,
      },
      {
        path: '/comments',
        component: Comments
      }
    ]
  }
];

export default routes;