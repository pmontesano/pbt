import React, { useContext } from 'react';
import { AppContext } from '../context';
const classnames = require('classnames');

const Menu = ({ menu: { title, items }, className }) => {
  const contextProps = useContext(AppContext);
  const { prefix } = contextProps;
  const namespace = `${prefix}-menu`;

  return (
    <div className={classnames(`${namespace}-container`, className)}>
      <h2 className={`${namespace}__title`}>{title}</h2>
      <ul className={namespace}>
        {items.map((item, i) => {
          return (
            <li key={i} className={`${namespace}__list`}>
              <a href={item.href} alt={item.text}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
