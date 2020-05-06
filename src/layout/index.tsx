import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.scss';
import { Header } from '../components/header';

interface LayoutProps {
  routes?: any[];
}

export const Layout: FC<LayoutProps> = (props) => {
  const { routes } = props;
  return (
    <section>
      <section className="layout-l">
        <Header />
      </section>

      <section className="layout-r">
        <Switch>
          {
            routes && routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                render={props => {
                  return <route.component />
                }} >
              </Route>
            ))
          }
        </Switch>
      </section>
    </section>
  )
}