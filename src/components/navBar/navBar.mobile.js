import React from 'react';
const classnames = require('classnames');
import Icon from '../icon';

const NavBarMobile = ({ links, className, prefix }) => {
  const namespace = `${prefix}-nav-bar`;

  const menuItems = [links[0], links[1]];
  const addCartLink = links[2];

  return (
    <>
      <nav className={namespace} role="navigation">
        <input
          type="checkbox"
          id="menuToggle"
          className={`${namespace}__input-toggle`}
        />
        <ul className={classnames(`${namespace}__menu`, className)}>
          <li className={`${namespace}__menu-list`}>
            <a href={addCartLink.href} alt={addCartLink.text}>
              <Icon
                className={`${namespace}__menu-icon`}
                src={addCartLink.icon.src}
                prefix={prefix}
              />
            </a>
          </li>
          <li
            className={`${namespace}__menu-list ${namespace}__menu-list--switch`}
          >
            <label htmlFor="menuToggle">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </li>
        </ul>
        <ul className={`${namespace}--mobile`}>
          {menuItems.map((link, i) => {
            return (
              <li key={i} className={`${namespace}__menu-list`}>
                <a href={link.href} alt={link.text}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarMobile;
