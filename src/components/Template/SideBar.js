import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const sideBarEmailId = 'sidebarEmail';

const copySidebarEmail = () => {
  // Shout out: https://stackoverflow.com/questions/49247129/javascript-copy-p-tag-with-html-format-to-clipbord/49247263
  const from = document.getElementById(sideBarEmailId);
  const range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(from);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  const copied = window.getSelection().toString();
  window.getSelection().removeAllRanges();
  alert(`${copied} copied to clipboard.`);
};

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Stan Rokita</h2>
        <p id="sidebarEmailContainer"><a href="mailto:stan@stansa.dev" id={sideBarEmailId}>stan@stansa.dev</a></p>
        <button type="button" onClick={copySidebarEmail}>Copy</button>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey! I&apos;m Stan. I do code stuff. Check it.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Stan Rokita<Link to="/">stansa.dev</Link>.</p>
    </section>
  </section>
);

export default SideBar;
