import React, { FC } from 'react';
import './index.scss';

export const Header: FC = () => {
  return (
    <header className="header-container">
      <section className="avatar">
        <img src="https://cdn.compelcode.com/image/common/avatar.jpg" alt="avatar" />
      </section>
      <h2 className="name">
        <a href="/">张旭</a>
      </h2>
      <p>Yesterday's the past, tomorrow's the future, but today is a GIFT. That's why it's called the present.</p>
    </header>
  )
}