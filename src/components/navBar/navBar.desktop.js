import React from 'react';
const classnames = require('classnames');
import Icon from '../icon';

const NavBarDesktop = ({ links, className, prefix }) => {
  const namespace = `${prefix}-nav-bar`;

  return (
    <nav className={namespace} role="navigation">
      <ul className={classnames(`${namespace}__menu`, className)}>
        {links.map((link, i) => {
          return (
            <li key={i} className={`${namespace}__menu-list`}>
              <a href={link.href} alt={link.text}>
                {link.icon !== null ? (
                  <Icon
                    className={`${namespace}__menu-icon`}
                    src={link.icon.src}
                    prefix={prefix}
                  />
                ) : (
                  link.text
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBarDesktop;
