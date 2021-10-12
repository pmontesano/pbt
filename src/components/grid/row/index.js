import React from 'react';
import classNames from 'classnames';

const namespace = 'pbt';

const Row = ({ children, modifier, className }) => {
  return (
    <div
      className={classNames(`${namespace}__row`, className, {
        [`${namespace}__row--${modifier}`]: modifier,
      })}
    >
      {children}
    </div>
  );
};

export default Row;
