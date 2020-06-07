import React from 'react';
import { Header } from '../common/components/header';
import { MainMenu } from '../common/components/main-menu';
import { SubMenu } from '../common/components/sub-menu';
import { Footer } from '../common/components/footer';
import './index.scss';
import { renderRoutes } from 'react-router-config';

export const Layout = (props: any) => {
  return (
    <section className="layout-container">
      <section className="layout-l">
        <Header />
        <SubMenu />
        <MainMenu />
        <Footer />
      </section>

      <section className="layout-r">
        {renderRoutes(props.route.routes)}
      </section>
    </section>
  )
}