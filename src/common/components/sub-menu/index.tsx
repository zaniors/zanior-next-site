import React, { FC } from 'react';
import './index.scss';

export const SubMenu: FC = () => {
  return (
    <section className="sub-menu-container">
      <a href="/detail" className="sub-menu-item">
        <span>17</span>
        <span>归档</span>
      </a>
      <a href="/detail" className="sub-menu-item">
        <span>17</span>
        <span>分类</span>
      </a>
      <a href="/detail" className="sub-menu-item">
        <span>17</span>
        <span>标签</span>
      </a>
      <a href="/detail" className="sub-menu-item">
        <span>17</span>
        <span>标签</span>
      </a>
    </section>
  )
}