import { Layout } from '../layout/index';
import Home from '../views/home/index';
import { Detail } from '../views/detail/index';
import { Resume } from '../views/resume/index';
import { Comments } from '../views/comments/index';
import { NotFound } from '../views/not-found';
import AppRoute from '../App';

const routes = [
  {
    component: AppRoute,
    routes: [
      {
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
          },
          {
            path: '*',
            component: NotFound
          }
        ]
      }
    ]
  }
];

export default routes;