import React, { FC } from 'react';
import { Header } from '../components/header';
import { MainMenu } from '../components/main-menu';
import { SubMenu } from '../components/sub-menu';
import { Footer } from '../components/footer';
import { Redirect, useLocation } from 'react-router-dom';
import './index.scss';

export const Layout: FC = (props) => {
  const { children } = props;
  const { pathname } = useLocation()
  return (
    <section className="layout-container">
      <section className="layout-l">
        <Header />
        <SubMenu />
        <MainMenu />
        <Footer />
      </section>

      <section className="layout-r">
        {pathname === '/' && <Redirect to={'/home'} />}
        {children}
      </section>
    </section>
  )
}