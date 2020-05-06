import React, { FC } from 'react';
import './index.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer-container">
      <section className="contact-list">
        <a
          className="icon-email"
          rel="external nofollow noopener"
          target="_blank"
          href="mailto:zansderjs@gmail.com"
        >email</a>

        <a
          className="icon-github"
          rel="external nofollow noopener"
          target="_blank"
          href="https://github.com/ZAnsder"
        >github</a>
      </section>

      <p className="copyright">
        &copy;2020 &bull; <a href="/">Zhary Zhang</a>
      </p>

      <p className="beian">
        <a target="_blank" rel="noopener" href="http://www.miibeian.gov.cn/">渝ICP备17003338号</a>
      </p>
    </footer>
  )
}