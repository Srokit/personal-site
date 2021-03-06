import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Stan Rokita's personal site"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Welcome! This site was built with React.js and SCSS. It&apos;s
            statically generated so it&apos;s fast.
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/srokit/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
