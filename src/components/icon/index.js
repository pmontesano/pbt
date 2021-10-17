import React from 'react';
import Image from '../image';
const classnames = require('classnames');

const namespace = 'ui-icon';

const Icon = ({ src, className }) => {
  return (
    <i className={classnames(namespace, className)}>
      <Image src={src} />
    </i>
  );
};

export default Icon;
