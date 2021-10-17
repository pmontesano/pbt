import React from 'react';
const classnames = require('classnames');

const namespace = 'ui-card';

const Card = ({ className, children }) => {
  const CardContent = ({ children }) => (
    <div className={`${namespace}__content`}>{children}</div>
  );

  return (
    <div className={classnames(namespace, className)}>
      <CardContent children={children} />
    </div>
  );
};

export default Card;
