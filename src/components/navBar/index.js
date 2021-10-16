import React from 'react';
const classnames = require('classnames');

const namespace = 'pbt-navBar';

const NavBar = ({ links, className }) => {
  console.log('NavBar props', links);

  return (
    <>
      <ul className={classnames(namespace, className)}>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} alt={link.text}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
