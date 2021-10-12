import React from 'react';
import classNames from 'classnames';

const namespace = 'pbt';

const Col = ({ size, children, className }) => {
  return (
    <div className={classNames(`${namespace}__col col-${size}`, className)}>
      {children}
    </div>
  );
};

export default Col;
