import React, { FC } from 'react';
import './index.scss';
import { Header } from '../components/header';

export const Layout: FC = (props) => {
  const { children } = props;
  return (
    <section>
      <section className="layout-l">
        <Header />
      </section>

      <section className="layout-r">
        {children}
      </section>
    </section>
  )
}