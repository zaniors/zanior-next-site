import React, { FC } from 'react';
import './index.scss';

export const MainMenu: FC = () => {
  return (
    <nav className="main-menu-container">
      <ul>
        <li><a href="/home">首页</a></li>
        <li><a href="/resume">简历</a></li>
      </ul>
    </nav>
  )
}